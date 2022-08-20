import { Component, OnInit } from '@angular/core';
import { educationData } from './education-data';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css', './../app.component.css'],
})
export class EducationComponent implements OnInit {
  educationData = educationData;
  constructor() {}

  ngOnInit(): void {}
}
