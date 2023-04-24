import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customfilter'
})
export class CustomfilterPipe implements PipeTransform {

  transform(value: string[], srchtxt: string): string[] {
    var tempArr = [];
    for (var i = 0; i < value.length; i++) {
      if (value[i].toLowerCase().includes(srchtxt.toLowerCase())) {
        tempArr.push(value[i])
      }
    }
    return tempArr;
  }
}
