import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import * as $ from 'jquery';

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
export class AppComponent implements OnInit {
  mode: string = 'light';
  circleColor: string = 'circle-dark';
  cursor: string = 'cursor-dark';

  ngOnInit() {
    $('.main').css({ 'overflow:': 'hidden', width: '100%', height: '100%' });
    setTimeout(() => {
      $('.main').css({ 'overflow:': 'auto', width: 'auto', height: 'auto' });
    }, 5000);
  }

  public toggleMode() {
    this.mode = this.mode === 'light' ? 'dark' : 'light';
    this.circleColor =
      this.circleColor === 'circle-light' ? 'circle-dark' : 'circle-light';
    this.cursor =
      this.cursor === 'cursor-light' ? 'cursor-dark' : 'cursor-light';
  }
}
