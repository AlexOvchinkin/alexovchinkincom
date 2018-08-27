import { Injectable } from '@angular/core';
import IArticle from '../interfaces/IArticle';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<IArticle[]> {
    return this.http.get(`${environment.serverOrigin}/api/articles`) as Observable<IArticle[]>;
  }

  getArticleById(params: number): Observable<IArticle> {
    const id = params['id'];
    return this.http.get(`${environment.serverOrigin}/api/article/${id}`) as Observable<IArticle>;
  } 

}
