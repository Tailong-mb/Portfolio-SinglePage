import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css'],
})
export class LetterComponent {
  @Input() word!: String;

  inComponent = false;

  @HostListener('mouseenter', ['$event.target'])
  onMouseEnter(event: any) {
    const letters = event.target.getElementsByClassName('letter');
    Array.from(letters).forEach((letter) => {
      // @ts-ignore
      letter.classList.add('animate');
    });
  }

  @HostListener('mouseleave', ['$event.target'])
  onMouseLeave(event: any) {
    const element = event.target;
    const letters = element.getElementsByClassName('letter');
    Array.from(letters).forEach((letter) => {
      // @ts-ignore
      letter.classList.remove('animate');
    });
  }

  constructor() {}
}
