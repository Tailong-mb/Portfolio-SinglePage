import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
  animations: [
    trigger('descriptionAnimation', [
      transition('void => *', [
        query('p', style({ transform: 'translateX(40px)' })),
        query(
          'p',
          stagger('400ms', [
            animate('500ms 1s ease-out', style({ transform: 'translateX(0)' })),
          ])
        ),
      ]),
    ]),
  ],
})
export class HeadComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
