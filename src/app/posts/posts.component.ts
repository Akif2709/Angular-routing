import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  posts;
  subscription$ = new Subject();
  loginUser;
  form = {
    title: '',
    body: '',
  };

  constructor(
    private postsService: PostsService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.posts = this.route.snapshot.data['posts'];
    this.loginUser = this.authService.loginUser$.getValue();

    const { title, body } = this.route.snapshot.queryParams;
    this.patchFormValue(title, body);
  }

  addPost({ title, body }) {
    if (!this.loginUser) {
      this.authService.redirectUrl = this.router.url;
      this.router.navigate(['/login'], { queryParams: { title, body } });
      return;
    }

    this.postsService
      .addPost({ title, body, id: new Date().getTime(), userId: this.loginUser?.id })
      .pipe(takeUntil(this.subscription$))
      .subscribe(({ body }: any) => {
        this.posts = [{ userName: this.loginUser?.name, ...body }, ...this.posts];
      });

    this.patchFormValue();
  }
  
  ngOnDestroy() {
    this.subscription$.next();
    this.subscription$.complete();
  }
  
    patchFormValue(title?, body?) {
      this.form = {
        title,
        body,
      };
    }
}
