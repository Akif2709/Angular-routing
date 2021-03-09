import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './users/user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, NotFoundComponent, PostsComponent, LoginComponent, WelcomeComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
