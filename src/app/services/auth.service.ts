import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import IAuthResponse from '../interfaces/IAuthResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(value: any): Observable<boolean> {
    return this.http
      .post(`${environment.serverOrigin}/api/login`, value)
      .pipe(map(responseData => {
        if(responseData && (responseData as IAuthResponse).token) {
          localStorage.setItem('user', JSON.stringify(responseData));
          return true;
        }

        return false;
      }));
  };

  logout() {
    localStorage.removeItem('user');
  };
}
