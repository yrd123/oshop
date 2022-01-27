import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import * as firebase from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  form : FormGroup;

  constructor(private afAuth: AngularFireAuth){
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
    this.afAuth.signInWithEmailAndPassword(this.email?.value, this.password?.value).then(e => console.log(e));
    console.log(this.email?.value);
    console.log(this.password?.value)
  }

 

}
