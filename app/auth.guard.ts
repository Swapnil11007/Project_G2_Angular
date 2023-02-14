import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserserviceService } from './userservice.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service:UserserviceService,private router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.service.getUserLogged()) {
      return true;
    } else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
  // private isUserLoggedIn() {
  //   // replace with your implementation for checking if the user is logged in
  //   return false;
  // }
  
}
