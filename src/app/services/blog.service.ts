import { Injectable } from '@angular/core';
import IArticle from '../interfaces/IArticle';
import { Observable, of } from 'rxjs';
import  { articles } from '../mocks/articles';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  getArticles(): Observable<IArticle[]> {
    return of(articles);
  }

  getArticleById(id: number): Observable<IArticle> {
    return of(articles[id]);
  }
}
