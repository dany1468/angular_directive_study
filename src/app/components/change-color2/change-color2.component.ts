import {Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-color2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-color2.component.html',
  styleUrls: ['./change-color2.component.scss']
})
export class ChangeColor2Component {
  @Output() colorChange: EventEmitter<string> = new EventEmitter();
  @Output('onChangeFont') fontChange: EventEmitter<string> = new EventEmitter();
}
