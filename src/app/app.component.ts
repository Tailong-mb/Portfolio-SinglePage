import {Component, HostListener, OnInit} from '@angular/core';
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
  borderColor: string = 'border-light';

  ngOnInit() {
    $('.main').css({ 'overflow:': 'hidden', width: '100%', height: '100%' });
    setTimeout(() => {
      $('.main').css({ 'overflow:': 'auto', width: 'auto', height: 'auto' });
    }, 5000);
  }

  public toggleMode() {
    this.borderColor = this.borderColor === 'border-dark' ? 'border-light' : 'border-dark';
    this.mode = this.mode === 'light' ? 'dark' : 'light';
    this.circleColor =
      this.circleColor === 'circle-light' ? 'circle-dark' : 'circle-light';
    this.cursor =
      this.cursor === 'cursor-light' ? 'cursor-dark' : 'cursor-light';
  }

  @HostListener('window:scroll')
  public reveal() {
    var reveals = document.querySelectorAll(".reveal")
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      if (elementTop < windowHeight) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
}
