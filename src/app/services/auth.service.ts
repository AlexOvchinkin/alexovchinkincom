import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import IAuthResponse from '../interfaces/IAuthResponse';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object) { }

  login(value: any): Observable<boolean> {
    return this.http
      .post(`${environment.serverOrigin}/api/login`, value)
      .pipe(map((responseData: IAuthResponse) => {
        if (responseData && responseData.token && isPlatformBrowser(this.platformId)) {
          localStorage.setItem('user', JSON.stringify(responseData));
          return true;
        }
        
        return false;
      }));
  };

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('user');
    }
  };
}
