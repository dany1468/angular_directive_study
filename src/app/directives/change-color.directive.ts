import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
  standalone: true,
  inputs: ['backgroundColor', 'weight: fontWeight', 'id: sample-id']
})
export class ChangeColorDirective implements OnInit {
  backgroundColor: string = 'white';
  weight: string = 'normal';
  id: string = '';
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.backgroundColor;
    this.el.nativeElement.style.fontWeight = this.weight;
    console.log('id: ' + this.id);
  }

  @Input() set appChangeColor(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
