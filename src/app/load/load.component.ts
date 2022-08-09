import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css'],
})
export class LoadComponent implements OnInit {
  hello = 'Hello';
  there = 'there';

  constructor() {}

  ngOnInit(): void {
    $('.there:last').css('padding-right', '0.4rem');
  }
}
