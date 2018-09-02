import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (isPlatformBrowser(this.platformId)) {
      // if logged
      if (localStorage.getItem('user')) {
        return true;
      }
    }


    // or redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
}
