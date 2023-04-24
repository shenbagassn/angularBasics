import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summaryCustom'
})
export class SummaryCustomPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    console.log(value);
    console.log(value.length);
    if (value.length > limit) {
      return value.substr(limit) + "... ";
    }
    return value;
  }

}
