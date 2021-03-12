import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../http-service.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls:['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;

  constructor(private service:HttpService, private router:Router) { }

  ngOnInit(): void {
    this.service.getMyTodos().subscribe(todos => this.todos = todos)
  }
  closeTab(){
    this.router.navigate([{outlets:{ sidebar: null}}])
  }
}
