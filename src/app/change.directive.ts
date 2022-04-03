import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";


@Directive({
  selector:'[appChange]'
})

export class ChangeDirective{
  @HostListener('mouseenter') onMouseEnter(){
    this.changeBackground('#FFFDDD');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.changeBackground('transparent');
  }
  constructor(private el:ElementRef , private render:Renderer2){
    // el.nativeElement.style.color = 'red';
  }

  changeBackground(color:string){
    this.render.setStyle(this.el.nativeElement,'background',color);
  }
}
