import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import {  Observable } from "rxjs";
import { PostsService } from "../posts.service";

@Injectable({ providedIn: 'root' })
export class PostsResolver implements Resolve<any> {
  constructor(private postsService: PostsService) {}

  resolve(): Observable<any>|Promise<any>|any {
    return this.postsService.getAllPosts()
  }
}