import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
    name: 'tag'
})

export class TagPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    if(!value) return '- - -';
    return value;
  }
}
