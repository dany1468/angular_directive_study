import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
  standalone: true
})
export class ChangeColorDirective {
  constructor(private el: ElementRef) { }

  @Input() set appChangeColor(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
