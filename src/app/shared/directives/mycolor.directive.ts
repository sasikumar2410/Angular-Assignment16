import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {

  @HostBinding('style.color') color:string
  @HostBinding('style.backgroundColor') bgcolor!: string;

  constructor(private eleRef:ElementRef, private renderer:Renderer2) {
    this.color = 'blue'
    this.bgcolor='white'
   }

   @HostListener('mouseover') onMouseOver(){
     this.color ='white'
     this.bgcolor = 'black'

   }
   @HostListener('mouseleav')
 @HostListener('mouseleave') onMouseLeave(){
    this.color ='blue'
    this.bgcolor = 'white'

  }
}
