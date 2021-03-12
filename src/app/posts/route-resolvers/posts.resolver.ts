import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import {  Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { PostsService } from "../../posts.service";

@Injectable({ providedIn: 'root' })
export class PostsResolver implements Resolve<any> {
  constructor(private postsService: PostsService) {}

  resolve(): Observable<any>|Promise<any>|any {
    return this.postsService.getAllPosts()
  }
}