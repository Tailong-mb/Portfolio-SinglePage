import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { HeadComponent } from './head/head.component';
import { BodyComponent } from './body/body.component';
import { ExperienceComponent } from './experience/experience.component';
import { RightSideComponent } from './right-side/right-side.component';

@NgModule({
  declarations: [AppComponent, TreeComponent, HeadComponent, BodyComponent, ExperienceComponent, RightSideComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
