import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminPanelComponent } from '../../components/admin-panel/admin-panel.component';

const routes: Routes = [
  { path: '', component: AdminPanelComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminPanelComponent]
})
export class AdministrationModule { }
