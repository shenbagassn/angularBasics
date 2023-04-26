import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(public elref:ElementRef) { 
   // elref.nativeElement.style.backgroundColor="yellow";
  }

  @HostListener('mouseover') myMouseOver(){
    console.log("host listener triggered");
    this.elref.nativeElement.style.backgroundColor="yellow";//setter
      }

      @HostListener('mouseleave') myMouseLeave(){
        this.elref.nativeElement.style.backgroundColor="transparent";
      }

}
