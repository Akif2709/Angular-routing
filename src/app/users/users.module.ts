import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { UsersComponent } from './users.component';
import { SpinnerComponent } from '../shared-components/spinner/spinner.component';
import { SharedModule } from '../shared-components/shared.module';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [{ path: ':id', component: UserComponent }],
  },
];

@NgModule({
  declarations: [UserComponent, UsersComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  entryComponents:[],
  exports:[],
  providers:[AuthGuard]

})
export class UsersModule {}
