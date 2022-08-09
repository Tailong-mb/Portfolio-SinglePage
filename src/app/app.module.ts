import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { PhotoComponent } from './photo/photo.component';
import { LetterComponent } from './letter/letter.component';
import { LoadComponent } from './load/load.component';
import { CursorComponent } from './cursor/cursor.component';

@NgModule({
  declarations: [AppComponent, TreeComponent, PhotoComponent, LetterComponent, LoadComponent, CursorComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
