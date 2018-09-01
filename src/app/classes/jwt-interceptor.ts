import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class jwtInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
      req = req.clone({
        setHeaders: {
          Authorization: user.token
        }
      });
    }

    return next.handle(req);
  }

}
