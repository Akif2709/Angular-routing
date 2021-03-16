import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { HttpService } from '../../http-service.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  users$;
  loginUser$;
  loading = false;
  constructor(private httpService:HttpService, private authService:AuthService, private route:ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
    this.users$ = this.httpService.getUsers()
    if(!this.loginUser$){
      this.loginUser$ = this.authService.loginUser$;
    }
    
  }

  login(user){
    this.loading = true;
    this.authService.login(user).subscribe((response) => {
      this.loading = false;
      if (response) {
        const redirectUrl = this.authService.redirectUrl
        if(redirectUrl){
          this.router.navigate([redirectUrl], { queryParamsHandling:'preserve' })
          this.authService.redirectUrl = undefined
        }
      }
    });
  }

  logout(){
    this.authService.logout()
  }
}
