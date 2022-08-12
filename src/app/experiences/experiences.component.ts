import {Component, Input, OnInit} from '@angular/core';
import {animate, keyframes, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('350ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 0 }),
        animate('350ms', style({ opacity: 0 })),
      ]),
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate(
          '1000ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: '0' }),
            style({ transform: 'rotate(2turn)', offset: '1' }),
          ])
        ),
      ]),
      transition(':leave', [
        animate(
          '1000ms',
          keyframes([
            style({ transform: 'rotate(2turn)', offset: '1' }),
            style({ transform: 'rotate(0deg)', offset: '0' }),
          ])
        ),
      ]),
    ]),
  ],
})
export class ExperiencesComponent implements OnInit {
  collapsed:boolean = false;

  @Input()
  circleColor!: string;

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  constructor() { }

  ngOnInit(): void {
  }

  isToggle() {
    let buttonToggle = this.collapsed ? 'button-open' : 'button-close';
    return buttonToggle + ' ' + this.circleColor;
  }
}
