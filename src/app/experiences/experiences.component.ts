import { Component, Input, OnInit } from '@angular/core';
import { fadeIn, fadeOut } from '../app.component';
import { experiencesData } from './experiencesData';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css', '../app.component.css'],
  animations: [fadeIn, fadeOut],
})
export class ExperiencesComponent implements OnInit {
  experienceData = experiencesData;
  collapsedArray = Array.from({ length: experiencesData.length }, () => false);
  crossStatueArray = Array.from(
    { length: experiencesData.length },
    () => 'cross-close'
  );

  @Input() mode!: string;

  constructor() {
    console.log(this.crossStatueArray);
  }

  toggleCollapsed(index: number): void {
    this.collapsedArray[index] = !this.collapsedArray[index];
    this.crossStatueArray[index] =
      this.crossStatueArray[index] === 'cross-open'
        ? 'cross-close'
        : 'cross-open';
  }

  getCrossStatue(index: number): string {
    return this.crossStatueArray[index];
  }

  getCollapsedStatue(index: number): boolean {
    return this.collapsedArray[index];
  }

  getCrossColor(): string {
    return this.mode === 'light' ? '#000' : '#fff';
  }

  getLine(): string {
    return this.mode === 'light' ? 'line-light' : 'line-dark';
  }

  ngOnInit(): void {}
}
