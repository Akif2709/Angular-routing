import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/main/auth/auth.service';
import { HttpService } from '../../http-service.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls:['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos$;

  constructor(private service:HttpService, private router:Router, private authService: AuthService) { }
  
  ngOnInit(): void {
    this.todos$ = this.authService.loginUser$.pipe(mergeMap((user)=>{
      if(user){
        
        console.log(user?.id)
        return this.service.getMyTodos(user?.id)
      } else {
        this.closeTab()
        return of()
      }
    }))
  }
  closeTab(){
    this.router.navigate([{outlets:{ sidebar: null}}])
  }
}
