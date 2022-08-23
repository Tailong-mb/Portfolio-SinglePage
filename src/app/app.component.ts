import { Component, HostListener, OnInit } from '@angular/core';
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
      transform: 'translateY(-20px)',
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

// Animation fadeOut
export const fadeOut = trigger('fadeOut', [
  state(
    '*',
    style({
      opacity: 1,
      transform: 'translateY(0px)',
    })
  ),
  transition(':leave', [
    animate(
      '.5s ease-in',
      style({
        opacity: 0,
        transform: 'translateY(-20px)',
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
    this.borderColor =
      this.borderColor === 'border-dark' ? 'border-light' : 'border-dark';
    this.mode = this.mode === 'light' ? 'dark' : 'light';
    this.circleColor =
      this.circleColor === 'circle-light' ? 'circle-dark' : 'circle-light';
    this.cursor =
      this.cursor === 'cursor-light' ? 'cursor-dark' : 'cursor-light';
  }

  @HostListener('window:scroll')
  public reveal() {
    let reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      if (elementTop < windowHeight - 75) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }

    let lines = document.querySelectorAll('.line');
    for (let j = 0; j < lines.length; j++) {
      let windowHeight = window.innerHeight;
      let elementTop = lines[j].getBoundingClientRect().top;
      if (elementTop < windowHeight - 75) {
        lines[j].classList.add('active');
      } else {
        lines[j].classList.remove('active');
      }
    }
  }

  // Scroll zone
  public scrollToExperience() {
    $('html, body').animate(
      {
        // @ts-ignore
        scrollTop: $('.experience-item').offset().top,
      },
      1500
    );
  }

  public scrollToContact() {
    $('html, body').animate(
      {
        // @ts-ignore
        scrollTop: $('.contact-click').offset().top,
      },
      1500
    );
  }

  public scrollToEducation() {
    $('html, body').animate(
      {
        // @ts-ignore
        scrollTop: $('.education-container').offset().top,
      },
      1500
    );
  }
}
