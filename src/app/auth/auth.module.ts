import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared-components/shared.module';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '' , component:LoginComponent }]),
  ],
  exports:[],

})
export class AuthModule { }
