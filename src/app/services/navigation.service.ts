import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  menuTogglerStream: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  setSmallMenu(small: boolean): void {
    this.menuTogglerStream.next(small);
  }
}
