import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  loginUser$;
  constructor(private authService:AuthService) {}

  ngOnInit(): void {
    this.loginUser$ = this.authService.loginUser$;
  }
}
