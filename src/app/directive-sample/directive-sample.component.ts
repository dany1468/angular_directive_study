import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChangeColorDirective} from '../directives/change-color.directive';

@Component({
  selector: 'app-directive-sample',
  standalone: true,
  imports: [CommonModule, ChangeColorDirective],
  templateUrl: './directive-sample.component.html',
  styleUrls: ['./directive-sample.component.scss']
})
export class DirectiveSampleComponent {

}
