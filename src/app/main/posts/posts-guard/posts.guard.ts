import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/main/auth/auth.service';
import { PostsComponent } from '../posts.component';

@Injectable({
  providedIn: 'root'
})
export class PostsGuard implements CanDeactivate<PostsComponent> {
  constructor(private authService:AuthService){}
  canDeactivate(
    component:PostsComponent,
    _route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    _nextState:RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

    if(component.form?.body || component.form?.title){
      return state.url === this.authService.redirectUrl ?  true : confirm('You loose your form value, continue ?')
    }
    
    return true
    
}
  
}
