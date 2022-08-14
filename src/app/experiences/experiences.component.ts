import {Component, Input, OnInit} from '@angular/core';
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
  @Input() mode!:string;

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
    this.crossStatue = this.crossStatue === 'cross-open' ? 'cross-close' : 'cross-open';
  }

  getCrossStatue(): string {
     return this.mode === 'light' ? this.crossStatue + ' cross-light' : this.crossStatue + ' cross-dark';
    }

  constructor() { }

  ngOnInit(): void {
  }

}
