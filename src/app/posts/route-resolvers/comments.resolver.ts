import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { combineLatest, Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { PostsService } from "../../posts.service";

@Injectable({ providedIn: 'root' })
export class CommentsResolver implements Resolve<any> {
  constructor(private postsService: PostsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    const postId = route.paramMap.get('id')
    const postUserName = route.paramMap.get('userName');
    return of({
        post:this.postsService.getPostById(postId).pipe(map(post =>( {...post, userName: postUserName}))),
        comments:this.postsService.getCommentsById(postId)
    })
  }
}