import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  constructor(private http: HttpClient) { }

  createNewArticle(value: any): any {
    return this.http.post('http://localhost:3000/api/new-article', value);
  }
}
