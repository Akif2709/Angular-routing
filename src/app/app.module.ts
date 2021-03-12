import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { NotFoundComponent } from './shared-components/not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { TodosComponent } from './shared-components/todos/todos.component';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './shared-components/spinner/spinner.component';
import { UsersModule } from './users/users.module';

const components = [
  AppComponent,
  NavbarComponent,
  NotFoundComponent,
  SpinnerComponent,
  LoginComponent,
  WelcomeComponent,
  TodosComponent,
];

@NgModule({
  declarations: [...components],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
