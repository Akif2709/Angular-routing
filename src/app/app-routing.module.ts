import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './main/auth/auth.guard';
import { CustomPreloadingStrategy } from './custom-preloading-strategy.service';

import { NotFoundComponent } from './shared-components/not-found/not-found.component';
import { TodosComponent } from './shared-components/todos/todos.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'home', component: WelcomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./main/auth/auth.module').then(m => m.AuthModule),
        data: { preload: true },
      },
      {
        path: 'users',
        loadChildren: () => import('./main/users/users.module').then(m => m.UsersModule),
        canActivate: [AuthGuard],
      },
      { path: 'posts', loadChildren: () => import('./main/posts/posts.module').then(m => m.PostsModule) },
      {
        path: 'todos',
        component: TodosComponent,
        outlet: 'sidebar',
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: CustomPreloadingStrategy })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
