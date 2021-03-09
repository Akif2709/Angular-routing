import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { UsersComponent } from './users.component';

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
})
export class UsersModule {}
