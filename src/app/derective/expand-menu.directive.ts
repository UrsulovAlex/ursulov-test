import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[expandMenu]',
  standalone: true
})
export class ExpandMenuDirective {
  isOpen = false

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') toggleOpen(){
    let parentElement = this.el.nativeElement.parentElement
    this.isOpen = !this.isOpen;
    this.isOpen ? this.renderer.addClass(parentElement, 'active') : this.renderer.removeClass(parentElement, 'active')
  }
}
