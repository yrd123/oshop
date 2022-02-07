import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, RouterState } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;
  

  constructor(private afAuth : AngularFireAuth) {
    this.user$ = afAuth.authState;
   }

  login(email:string , password:string){

    this.afAuth.signInWithEmailAndPassword(email, password).then(e => console.log(e));
    console.log(email);
    console.log(password);
  }

  logout(){
    this.afAuth.signOut();
  }
}
