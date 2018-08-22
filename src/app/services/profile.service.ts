import { Injectable, isDevMode } from '@angular/core';
import '../mocks/projects';
import IProfileProject from '../interfaces/IProfileProject';
import { Observable } from 'rxjs';
import { of } from 'rxjs'
import projects from '../mocks/projects';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProjects(): Observable<IProfileProject[]> {
    return of(projects);
  }
}
