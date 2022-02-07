import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth:AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      /*this.auth.user$.map()*/
      return true;
  }
}
