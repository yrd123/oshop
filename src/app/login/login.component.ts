import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import * as firebase from 'firebase/auth';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  form : FormGroup;

  constructor(private userService:UserService, private auth: AuthService, private route:ActivatedRoute, private router :Router){
    this.form = new FormGroup({
      'email' : new FormControl('',[Validators.required, Validators.maxLength(50)]),
      'password':new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  
  }

  get email(){
    return this.form.get("email");
  }

  get password(){
    return this.form.get("password");
  }
  

  login(){
    
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    this.auth.login(this.email?.value, this.password?.value);  
    this.auth.user$.subscribe(user => {
      if(user){
        this.userService.save(user);
        this.router.navigate([returnUrl || "/"]);
      }
    })
    
  }

 

}
