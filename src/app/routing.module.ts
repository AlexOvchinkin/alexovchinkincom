import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'profile', loadChildren: './modules/profile/profile.module#ProfileModule' },
  { path: 'blog', loadChildren: './modules/blog/blog.module#BlogModule' },
  { path: 'admin', loadChildren: './modules/administration/administration.module#AdministrationModule' },
  { path: '**', redirectTo: '/profile', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }



