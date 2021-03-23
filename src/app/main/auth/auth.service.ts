import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUser$ = new BehaviorSubject(undefined);
  redirectUrl:string;

  constructor() { }
  login(user): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => this.loginUser$.next(user))
    );
  }
  
  logout(){
    this.loginUser$.next(undefined)
  }

}
