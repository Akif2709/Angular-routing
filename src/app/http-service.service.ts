import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, tap} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private readonly http:HttpClient) { }

  getUsers (){
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(tap(console.log))
  }




}
