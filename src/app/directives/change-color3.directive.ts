import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '.appChangeColor3',
  standalone: true
})
export class ChangeColor3Directive implements OnInit {
  @Input() backgroundColor: string = 'gray';
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.backgroundColor;
  }
}
