import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth:AuthService, private router:Router) {

   }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    /*this.auth.user$.pipe(map(user => {
      if(user) return true;
      this.router.navigate(['/login'], {queryParams : {returnUrl: state.url}});
      return false;
    }));*/
    return true;
    
    /*return this.auth.user$.subscribe(user => {
      if(user){
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    })*/
  }
}
