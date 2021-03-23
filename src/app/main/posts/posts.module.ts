import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PostsComponent } from './posts.component';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { CommentsResolver } from './route-resolvers/comments.resolver';
import { PostsResolver } from './route-resolvers/posts.resolver';
import { PostsGuard } from './posts-guard/posts.guard';

const routes: Routes = [
  { path: '', component: PostsComponent, resolve:{posts: PostsResolver}, canDeactivate:[PostsGuard] },
  { path: ':id', component: PostDetailsComponent, resolve: { postComments: CommentsResolver } },
];

@NgModule({
  declarations: [PostsComponent, PostComponent, PostDetailsComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class PostsModule {}
