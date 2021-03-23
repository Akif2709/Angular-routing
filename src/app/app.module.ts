import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { NotFoundComponent } from './shared-components/not-found/not-found.component';
import { LoginComponent } from './main/auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { TodosComponent } from './shared-components/todos/todos.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared-components/shared.module';
import { MainComponent } from './main/main.component';

const components = [
  AppComponent,
  WelcomeComponent,
 
];

@NgModule({
  declarations: [...components, MainComponent],
  imports: [BrowserModule,BrowserAnimationsModule, HttpClientModule, FormsModule, SharedModule, AppRoutingModule],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
