import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private readonly http: HttpClient) {}

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUser(id) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  getAlbumsOfUser(userId) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);
  }

  getTodosOfUser(userId) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
  }

  getPostsOfUser(userId) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
  }
  getMyTodos(id?) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}/todos`).pipe(map((todos:any[]) => todos.slice(0,5).map(todo =>({...todo,  title: todo.title?.substring(0,10)}))));
  }


}
