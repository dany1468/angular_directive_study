import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appChangeColor2]',
  standalone: true
})
export class ChangeColor2Directive implements OnInit {
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.backgroundColor;
    this.el.nativeElement.style.fontWeight = this.weight;
  }

  @Input() set appChangeColor(color: string) {
    this.el.nativeElement.style.color = color;
  }

  @Input() backgroundColor: string = 'white';
  @Input() weight: string = 'normal';
}
