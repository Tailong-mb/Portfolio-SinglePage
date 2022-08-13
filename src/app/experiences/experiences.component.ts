import {Component, OnInit} from '@angular/core';
import {fadeIn, fadeOut} from "../app.component";

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
  animations:[fadeIn, fadeOut],
})
export class ExperiencesComponent implements OnInit {
  collapsed:boolean = false;
  crossStatue:string = 'cross-open';

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
    this.crossStatue = this.crossStatue === 'cross-open' ? 'cross-close' : 'cross-open';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
