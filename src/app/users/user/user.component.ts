import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { HttpService } from 'src/app/http-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  user;
  userId;
  albums;

  constructor(private readonly activatedRoute: ActivatedRoute, private httpService: HttpService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        switchMap(params => {
          this.userId = Number(params.get('id'));
          return combineLatest([this.httpService.getUser(this.userId), this.httpService.getAlbumsOfUser(this.userId)]);
        }),
      )
      .subscribe(([user, albums]) => {
        this.user = user;
        this.albums = albums;
      });
  }
}
