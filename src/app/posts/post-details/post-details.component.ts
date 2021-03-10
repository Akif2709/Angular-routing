import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter, map, takeUntil, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styles: []
})
export class PostDetailsComponent implements OnInit, OnDestroy {
  post$;
  comments$;
  loginUser$;
  destroy$ = new Subject()

  constructor(private postsService:PostsService, private activatedRoute:ActivatedRoute, private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    const {paramMap, queryParams} = this.activatedRoute.snapshot
    const postId = paramMap.get('id')
    const postUserName = queryParams.userName;

    this.post$ = this.postsService.getPostById(postId).pipe(map(post =>( {...post, userName: postUserName})))
    this.comments$ = this.postsService.getCommentsById(postId)
    this.loginUser$ = this.authService.loginUser$.pipe(tap(console.log));
  }

  deletePost(id){
    this.postsService.deletePost(id).pipe(takeUntil(this.destroy$)).subscribe(() => window.alert('POST IS DELETED ! You will see it again. because server is mock'))
    this.router.navigate(["/posts"])
  }

  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()

  }

}
