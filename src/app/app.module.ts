import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { PhotoComponent } from './photo/photo.component';
import { LetterComponent } from './letter/letter.component';

@NgModule({
  declarations: [AppComponent, TreeComponent, PhotoComponent, LetterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
