import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PostsComponent } from './posts.component';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostDetailsComponent } from './post-details/post-details.component';


const routes:Routes = [
  { path: '', component: PostsComponent },
  { path: ':id', component: PostDetailsComponent },
]

@NgModule({
  declarations: [PostsComponent, PostComponent, PostDetailsComponent],
  imports: [CommonModule,FormsModule, RouterModule.forChild(routes)],
})
export class PostsModule {}
