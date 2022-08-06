import { Component, HostListener, Input } from '@angular/core';
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
})
export class LetterComponent {
  @Input() word!: String;

  inComponent = false;

  @HostListener('mouseenter')
  onMouseEnter() {
    Array.from(document.getElementsByClassName('letter')).forEach((letter) => {
      letter.classList.add('animate');
    });
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    Array.from(document.getElementsByClassName('letter')).forEach((letter) => {
      letter.classList.remove('animate');
    });
  }

  constructor() {}
}
