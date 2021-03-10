import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { HttpService } from '../http-service.service';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit, OnDestroy {
  posts$;
  subscription$ = new Subject();
  loginUser;

  constructor(private postsService: PostsService, private authService:AuthService, private router:Router) {}

  ngOnInit(): void {
    this.posts$ = this.postsService.getAllPosts();
    this.loginUser = this.authService.loginUser$.getValue()
  }

  addPost(postBody) {
    if(!this.loginUser){
      this.router.navigate(["/login"])
      return
    }
    const body = {...postBody, id: new Date().getTime(), userId:this.loginUser?.id}
    console.log(body)
    this.postsService
      .addPost(body)
      .pipe(takeUntil(this.subscription$))
      .subscribe(({body} : any) => {
        this.posts$ = this.posts$.pipe(map((posts: any[]) => ([ body, ...posts ])));
      });
  }

  ngOnDestroy() {
    this.subscription$.next();
    this.subscription$.complete();
  }
}
