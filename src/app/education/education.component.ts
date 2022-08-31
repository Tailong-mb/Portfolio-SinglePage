import { Component, Input, OnInit } from '@angular/core';
import { educationData } from './education-data';
import * as $ from 'jquery';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css', './../app.component.css'],
})
export class EducationComponent implements OnInit {
  educationData = educationData;
  // Array of boolean of education Data
  isExpanded = new Array(this.educationData.length).fill(false);

  @Input() mode!: string;

  // Toggle the expanded state of the education data
  toggleExpand(i: number) {
    this.isExpanded[i] = !this.isExpanded[i];
  }

  moveCarouselToNext() {
    const actualView = this.isExpanded.indexOf(true);
    this.toggleExpand(actualView);
    this.toggleExpand(actualView + 1);
  }

  moveCarouselToPrevious() {
    const actualView = this.isExpanded.indexOf(true);
    this.toggleExpand(actualView);
    this.toggleExpand(actualView - 1);
  }

  toggleCursor() {
    $('.cursor').toggleClass('cursor-grow');
  }

  isMode() {
    return this.mode === 'light' ? 'arrow-light' : 'arrow-dark';
  }

  constructor() {
    this.isExpanded[0] = true;
  }

  ngOnInit(): void {}
}
