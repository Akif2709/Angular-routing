import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  users;
  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
    this.httpService.getUsers().subscribe(users => this.users = users)
  }

}
