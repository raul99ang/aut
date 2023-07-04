import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import jwtDecode from 'jwt-decode';
import { UserModel } from 'src/models/User.model';
import { UserService } from 'src/services/User.service';
import { AuthService } from 'src/services/Auth.service';
@Injectable({
  providedIn: 'root'
})
export class VigilanteGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router, private authService: AuthService){
  }
  
  redirect(flag: boolean): boolean {
    if( !flag){
      this.router.navigate(['/', 'login'])
    }
    return flag;
  }
 /*canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.redirect(!!localStorage.getItem('token'));
    

  } 
}*/
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   const token = localStorage.getItem('token');
    if (token) {
      const user: UserModel = jwtDecode(token);
      //const currentUser: UserModel = JSON.parse(localStorage.getItem('currentUser') || '{}');
      //const allowedRoles = (currentUser.role) ? [currentUser.role] : [];
      const allowedRoles = (user.role) ? [user.role] : [];
      if (user && user.role && allowedRoles.includes(user.role)) {
        return true;
      }
    }
    const currentUser: UserModel = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const allowedRoles = (currentUser.role) ? [currentUser.role] : [];
    if (allowedRoles.length > 0 && allowedRoles.some((role: string) => route.data['role'].includes(role))) {
      return true;
    }
    this.router.navigate(['/', 'Login']);
    return false;
  }
}  
