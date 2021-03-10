import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { HttpService } from '../http-service.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private readonly http: HttpClient, private httpService: HttpService) {}

  getAllPosts() {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`).pipe(
      switchMap((posts: any[]) => {
        return this.httpService.getUsers().pipe(
          map((users: any[]) => {
            return posts.map(post => {
              const user = users.find(user => user.id === post.userId);
              return { ...post, userName: user.name };
            });
          }),
        );
      }),
    );
  }

  getPostById(id) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
  getCommentsById(id) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  }

  deletePost(id) {
    return this.http
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .pipe(catchError(error => throwError(error)));
  }

  addPost(body) {
    return this.http.post(`https://jsonplaceholder.typicode.com/posts`, { body });
  }
}
