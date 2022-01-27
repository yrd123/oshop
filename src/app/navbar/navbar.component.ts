import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/auth';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  user$: Observable<any>;
  
  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }

  logout(){
    this.afAuth.signOut();
    
  }


}
