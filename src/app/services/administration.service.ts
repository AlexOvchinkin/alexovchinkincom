import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  constructor() { }

  createNewArticle(value: any): void {
    console.log(value);
  }
}
