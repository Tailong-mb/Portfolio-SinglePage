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

    $('#canvas').on('mouseenter mouseleave', function () {
      $('.cursor').toggleClass('cursor-grow');
    });

    $('#photo').on('mouseenter mouseleave', function () {
      $('.cursor').toggleClass('cursor-light');
    });

    $('.contact-click').on('mouseenter mouseleave', function () {
      $('.cursor-basic').toggleClass('visible');
      $('.cursor-contact').toggleClass('visible');
    });
  }

  @HostListener('window:mousemove', ['$event'])
  public mousemove(event: MouseEvent) {
    const xPos = event.pageX;
    const yPos = event.pageY;
    // console.log(xPos, yPos);
    // @ts-ignore
    $('.cursor').css({
      top: yPos,
      left: xPos,
    });
  }

  public getMode(): string {
    return this.mode !== 'cursor-dark'
      ? 'cursor-image-dark'
      : 'cursor-image-light';
  }
}
