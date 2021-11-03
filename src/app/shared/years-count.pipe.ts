import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearsCount'
})
export class YearsCountPipe implements PipeTransform {

  transform(value: string): number {
    console.log('pipe');
    if (value) {
      let curr = Date.now();
      let given = new Date(value).getTime();
      return new Date(curr - given).getFullYear() - 1970;
    }
    return 0;
  }

}
