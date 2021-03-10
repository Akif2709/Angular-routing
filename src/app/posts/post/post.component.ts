import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent {
  @Input() post;
  constructor(private route:Router, private activateRoute:ActivatedRoute){}

  navigateToDetails(){
    this.route.navigate([this.post.id], {relativeTo:this.activateRoute, queryParams:{userName:this.post.userName}})
  }
}
