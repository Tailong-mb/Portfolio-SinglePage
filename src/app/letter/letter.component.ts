import { Component, Input } from '@angular/core';
import { fadeIn } from '../app.component';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css'],
  animations: [fadeIn],
})
export class LetterComponent {
  @Input() word!: String;

  constructor() {}
}
