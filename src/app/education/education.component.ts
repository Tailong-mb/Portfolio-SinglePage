import { Component, OnInit } from '@angular/core';
import { educationData } from './education-data';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css', './../app.component.css'],
})
export class EducationComponent implements OnInit {
  educationData = educationData;
  // Array of boolean of education Data
  isExpanded = new Array(this.educationData.length).fill(false);

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

  constructor() {
    this.isExpanded[0] = true;
  }

  ngOnInit(): void {}
}
