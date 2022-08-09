import {
  AfterContentInit,
  Component,
  HostListener,
  Input,
} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.css'],
})
export class CursorComponent implements AfterContentInit {
  @Input()
  mode!: string;

  constructor() {}

  ngAfterContentInit(): void {
    $('.word-container').on('mouseenter mouseleave', function () {
      $('.cursor').toggleClass('cursor-grow');
    });

    $('#photo').on('mouseenter mouseleave', function () {
      $('.cursor').toggleClass('cursor-light');
    });
  }

  @HostListener('window:mousemove', ['$event'])
  public mousemove(event: MouseEvent) {
    const cursor = document.querySelector('.cursor');
    // @ts-ignore
    cursor.setAttribute(
      'style',
      'top: ' + event.clientY + 'px; left: ' + event.clientX + 'px;'
    );
  }
}
