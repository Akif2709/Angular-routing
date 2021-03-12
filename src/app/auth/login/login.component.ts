import { Component, OnInit } from '@angular/core';
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
  constructor(private httpService:HttpService, private authService:AuthService) {}

  ngOnInit(): void {
    this.users$ = this.httpService.getUsers()
    if(!this.loginUser$){
      console.log(12212)

      this.loginUser$ = this.authService.loginUser$.pipe(tap(console.log));
    }
    
  }

  login(user){
    this.loading = true;
    this.authService.login(user).subscribe((response) => {
      // this.setMessage();
      this.loading = false;
      
      if (response) {

        // const redirectUrl = '/admin';

        // const navigationExtras: NavigationExtras = {
        //   queryParamsHandling: 'preserve',
        //   preserveFragment: true
        // };
        // this.router.navigate([redirectUrl], navigationExtras);
      }
    });
  }

  logout(){
    this.authService.logout()
  }
}
