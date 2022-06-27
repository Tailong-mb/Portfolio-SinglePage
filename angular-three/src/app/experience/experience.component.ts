import { Component, OnInit } from '@angular/core';
import { experienceData, formationData } from './experienceData';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experienceInfo = experienceData;
  formationInfo = formationData;

  constructor() {}

  ngOnInit(): void {}
}
