import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChangeColorDirective} from '../directives/change-color.directive';
import {ChangeColor2Directive} from '../directives/change-color2.directive';
import {ChangeColorComponent} from '../components/change-color/change-color.component';
import {ChangeColor2Component} from '../components/change-color2/change-color2.component';

@Component({
  selector: 'app-directive-sample',
  standalone: true,
  imports: [CommonModule, ChangeColorDirective, ChangeColor2Directive, ChangeColorComponent, ChangeColor2Component],
  templateUrl: './directive-sample.component.html',
  styleUrls: ['./directive-sample.component.scss']
})
export class DirectiveSampleComponent {
  colorOfOutputSample: string = 'black';
  fontWeightOfOutputSample: string = 'normal';

  onColorChange($event: any) {
    console.log($event);
    this.colorOfOutputSample = $event;
  }

  onChangeFont($event: any) {
    this.fontWeightOfOutputSample = $event;
  }

  colorOfOutputSample2: string = 'black';
  fontWeightOfOutputSample2: string = 'normal';

  onColorChange2($event: any) {
    console.log($event);
    this.colorOfOutputSample2 = $event;
  }

  onChangeFont2($event: any) {
    this.fontWeightOfOutputSample2 = $event;
  }
}
