import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  constructor(private http: HttpClient) { }

  createNewArticle(value: any): void {
    this.http.post('http://localhost:3000/api/new-article', value)
      .subscribe(data => console.log('done'));
  }
}
