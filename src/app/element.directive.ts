import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appElement]'
})
export class ElementDirective {

title_new='Gurpreet Kaur'

  constructor(el:ElementRef) {
   
   
    el.nativeElement.style.color="red"

   }

}
