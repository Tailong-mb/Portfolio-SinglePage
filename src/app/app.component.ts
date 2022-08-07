import { Component } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

// Animation fadeIn
export const fadeIn = trigger('fadeIn', [
  state(
    'void',
    style({
      opacity: 0,
      transform: 'translateY(20px)',
    })
  ),
  transition(':enter', [
    animate(
      '.5s ease-in',
      style({
        opacity: 1,
        transform: 'translateY(0)',
      })
    ),
  ]),
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeIn],
})
export class AppComponent {
  mode: string = 'light';
  circleColor: string = 'circle-dark';

  public toggleMode() {
    this.mode = this.mode === 'light' ? 'dark' : 'light';
    this.circleColor =
      this.circleColor === 'circle-light' ? 'circle-dark' : 'circle-light';
  }
}
