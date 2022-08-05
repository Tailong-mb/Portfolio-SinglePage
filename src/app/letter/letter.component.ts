import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css'],
})
export class LetterComponent {
  @Input() word!: String;

  constructor() {}
}
