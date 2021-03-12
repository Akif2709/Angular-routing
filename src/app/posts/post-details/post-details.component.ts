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

  constructor(private postsService:PostsService, private route:ActivatedRoute, private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.loginUser$ = this.authService.loginUser$;
    const {post, comments} = this.route.snapshot.data['postComments']
    this.post$ = post
    this.comments$ = comments
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
