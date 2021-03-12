import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PostsComponent } from './posts.component';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { CommentsResolver } from './post/resolvers/comments.resolver';
import { PostsResolver } from './post/resolvers/posts.resolver';

const routes: Routes = [
  { path: '', component: PostsComponent, resolve:{posts: PostsResolver} },
  { path: ':id', component: PostDetailsComponent, resolve: { postComments: CommentsResolver } },
];

@NgModule({
  declarations: [PostsComponent, PostComponent, PostDetailsComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class PostsModule {}
