import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]',
  standalone: true
})
export class AppHighlightDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor('yellow');  // Cambia el color de fondo a amarillo
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('');  // Restaura el color de fondo original
  }

  private changeBackgroundColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
