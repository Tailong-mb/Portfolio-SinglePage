import {
  animate,
  keyframes,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { informationComplement, informationContact } from './dataHeader';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
  animations: [
    trigger('descriptionAnimation', [
      transition('void => *', [
        query('p', style({ transform: 'translateX(-40px)' })),
        query(
          'p',
          stagger('400ms', [
            animate('500ms 1s ease-out', style({ transform: 'translateX(0)' })),
          ])
        ),
      ]),
    ]),
    trigger('listAnimation', [
      transition('void => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(
          ':enter',
          stagger('200ms', [
            animate(
              '1s ease-in',
              keyframes([
                style({
                  opacity: 0,
                  transform: 'translateY(-75px)',
                  offset: 0,
                }),
                style({
                  opacity: 0.5,
                  transform: 'translateY(35px)',
                  offset: 0.3,
                }),
                style({ opacity: 1, transform: 'translateY(0px)', offset: 1 }),
              ])
            ),
          ]),
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class HeadComponent implements OnInit {
  dataLeft = informationContact;
  dataRight = informationComplement;

  constructor() {}

  ngOnInit(): void {}
}
