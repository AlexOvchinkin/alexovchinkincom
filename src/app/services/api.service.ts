import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';

import ITag from '../interfaces/ITag';
import IArticle from '../interfaces/IArticle';
import IProfileProject from '../interfaces/IProfileProject';
import projects from '../mocks/projects';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  createNewArticle(value: any): any {
    return this.http
      .post(`${environment.serverOrigin}/api/new-article`, value);
  }

  getTags(): Observable<ITag[]> {
    return this.http
      .get(`${environment.serverOrigin}/api/tags`) as Observable<ITag[]>;
  }

  addNewTag(tag: string): Observable<ITag> {
    return this.http
      .post(`${environment.serverOrigin}/api/new-tag`, { tag: tag }) as Observable<ITag>;
  }

  getArticles(): Observable<IArticle[]> {
    return this.http
      .get(`${environment.serverOrigin}/api/articles/all`) as Observable<IArticle[]>;
  }

  getArticleById(params: number): Observable<IArticle> {
    const id = params['id'];
    return this.http
      .get(`${environment.serverOrigin}/api/article/${id}`) as Observable<IArticle>;
  }

  getArticlesByTag(tag: ITag): Observable<IArticle[]> {
    return this.http
      .get(`${environment.serverOrigin}/api/articles/tag/${tag._id}`) as Observable<IArticle[]>;
  }

  getProjects(): Observable<IProfileProject[]> {
    return of(projects);
  }
}
