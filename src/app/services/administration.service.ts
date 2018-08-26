import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import ITag from '../interfaces/ITag';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  constructor(private http: HttpClient) { }

  createNewArticle(value: any): any {
    return this.http.post(`${environment.serverOrigin}/api/new-article`, value);
  }

  getTags(): Observable<ITag[]> {
    return this.http.get(`${environment.serverOrigin}/api/tags`) as Observable<ITag[]>;
  }

  addNewTag(tag: string): Observable<ITag> {
    return this.http.post(`${environment.serverOrigin}/api/new-tag`, { tag: tag }) as Observable<ITag>;
  }
}
