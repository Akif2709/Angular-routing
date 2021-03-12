import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { UsersComponent } from './users.component';
import { SpinnerComponent } from '../shared-components/spinner/spinner.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [{ path: ':id', component: UserComponent }],
  },
];

@NgModule({
  declarations: [UserComponent, UsersComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports:[]
})
export class UsersModule {}
