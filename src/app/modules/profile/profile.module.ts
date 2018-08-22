import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../../components/profile/profile.component';

import { Routes, RouterModule } from '@angular/router';
import { ProjectsCarouselComponent } from '../../components/projects-carousel/projects-carousel.component';

const routes: Routes = [
  { path: '', component: ProfileComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfileComponent, ProjectsCarouselComponent]
})
export class ProfileModule { }
