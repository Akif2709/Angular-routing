import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../animation';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ],
  animations:[slideInAnimation]
})
export class MainComponent {}
