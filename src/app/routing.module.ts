import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'profile', loadChildren: './modules/profile/profile.module#ProfileModule' },
  { path: 'blog', loadChildren: './modules/blog/blog.module#BlogModule' },
  { 
    path: 'admin', 
    loadChildren: './modules/administration/administration.module#AdministrationModule',
    canActivate: [AuthGuard] 
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/profile', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }



