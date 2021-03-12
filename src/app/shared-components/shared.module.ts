import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TodosComponent } from './todos/todos.component';
import { RouterModule } from '@angular/router';

const components = [NavbarComponent, NotFoundComponent, SpinnerComponent, TodosComponent]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[...components]
})
export class SharedModule { }
