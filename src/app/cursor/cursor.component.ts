import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.css'],
})
export class CursorComponent implements OnInit {
  @Input()
  mode!: string;

  constructor() {}

  ngOnInit(): void {}

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
