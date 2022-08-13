import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

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
  ],
})
export class ExperiencesComponent implements OnInit {
  collapsed:boolean = false;

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
