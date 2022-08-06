import { Component, Input } from '@angular/core';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css'],
  //Bounce child
  animations: [
    trigger('letterAnimation', [
      transition('* => *', [
        query('.letter', style({ transform: 'translateY(0)' })),
        query(
          '.letter',
          stagger('50ms', [
            animate(
              '200ms ease-out',
              style({ transform: 'translateY(-100%)' })
            ),
          ])
        ),
      ]),
    ]),
  ],
})
export class LetterComponent {
  @Input() word!: String;

  constructor() {}
}
