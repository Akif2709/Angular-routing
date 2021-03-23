import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../http-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
    `
      .box-shadow:hover {
        background-color: #c0c0c0;
      }
    `,
  ],
})
export class UsersComponent implements OnInit {
  users;
  selectedUser;
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getUsers().subscribe(users => (this.users = users));
  }

  showUserDetails(id) {
    this.selectedUser = id;
  }
}
