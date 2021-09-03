import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() bgColor:string = ""
  @Input() textColor:string = ""

  constructor(private elementRef: ElementRef) {

    // @HostListener('mouseenter')onMouseEnter(){
    //   this.elementRef.nativeElement.style.fontWeight = "bold";
    //   this.elementRef.nativeElement.style.color = "Red";
    //   this.elementRef.nativeElement.style.backgroundColor = "gray";
    // }
  
    // @HostListener('mouseleave')onMouseLeave(){
    //   this.elementRef.nativeElement.style.fontWeight = "normal";
    //   this.elementRef.nativeElement.style.color = "black";
    // }

   }

}
