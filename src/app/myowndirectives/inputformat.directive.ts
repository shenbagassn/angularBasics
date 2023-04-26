import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appInputformat]'
})
export class InputformatDirective {

 // @Input() format: string ='';
 @Input('appInputformat') format:string='';


  constructor(public elref: ElementRef) { }

  @HostListener('blur') myOwnBlur() {
    console.log(this.format);
    
    var str = this.elref.nativeElement.value;//getter
    if (this.format == 'upper') {
      this.elref.nativeElement.value = str.toUpperCase();
    }
    else {
      this.elref.nativeElement.value = str.toLowerCase();
    }

  }

}
