import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { RightSideComponent } from './right-side/right-side.component';

const routes: Routes = [
  { path: '', redirectTo: 'CV-Yanis', pathMatch: 'full' },
  { path: 'CV-Yanis', component: RightSideComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
