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
    return <Observable<ITag[]>>this.http
      .get(`${environment.serverOrigin}/api/tags`);
  }

  addNewTag(tag: string): Observable<ITag> {
    return <Observable<ITag>>this.http
      .post(`${environment.serverOrigin}/api/new-tag`, { tag: tag });
  }

  getArticles(): Observable<IArticle[]> {
    return <Observable<IArticle[]>>this.http
      .get(`${environment.serverOrigin}/api/articles/all`);
  }

  getArticleById(params: number): Observable<IArticle> {
    const id = params['id'];
    return <Observable<IArticle>>this.http
      .get(`${environment.serverOrigin}/api/article/${id}`);
  }

  getArticlesByTag(tag: ITag): Observable<IArticle[]> {
    return <Observable<IArticle[]>>this.http
      .get(`${environment.serverOrigin}/api/articles/tag/${tag._id}`);
  }

  getProjects(): Observable<IProfileProject[]> {
    return of(projects);
  }
}
