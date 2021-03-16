import { Component } from '@angular/core';
import { slideInAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations:[slideInAnimation]
})
export class AppComponent {
}
