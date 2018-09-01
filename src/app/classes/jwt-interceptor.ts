import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class jwtInterceptor implements HttpInterceptor {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (isPlatformBrowser(this.platformId)) {
      const user = JSON.parse(localStorage.getItem('user'));

      if (user && user.token) {
        req = req.clone({
          setHeaders: {
            Authorization: user.token
          }
        });
      }
    }

    return next.handle(req);
  }

}
