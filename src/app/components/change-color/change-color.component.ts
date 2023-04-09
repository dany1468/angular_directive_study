import {Component, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentChildSampleDirective} from '../../directives/content-child-sample.directive';

@Component({
  selector: 'app-change-color',
  standalone: true,
  imports: [CommonModule, ContentChildSampleDirective],
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.scss'],
  outputs: ['colorChange', 'fontChange: onChangeFont'],
})
export class ChangeColorComponent {
  colorChange: EventEmitter<string> = new EventEmitter();
  fontChange: EventEmitter<string> = new EventEmitter();
}
