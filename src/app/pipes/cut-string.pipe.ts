import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
    name: 'cutString'
})

export class CutStringPipe implements PipeTransform {
    transform(value: string, length: number) {
        if(value.length > length) {
            return value.slice(0, length) + ' ...'
        }

        return value;
    }
}
