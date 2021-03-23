import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";


@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const isLoggedIn = !!this.authService.loginUser$.getValue()?.id
    if(isLoggedIn){
        return true;
    } else {
        this.authService.redirectUrl = state.url;
        this.router.navigate(['/login']);
        window.alert('Redirecting to login page with "Activate Guard" !');
        return false;
    }
  }
}