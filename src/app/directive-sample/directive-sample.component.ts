import {Component, ContentChild, ContentChildren, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChangeColorDirective} from '../directives/change-color.directive';
import {ChangeColor2Directive} from '../directives/change-color2.directive';
import {ChangeColor3Directive} from '../directives/change-color3.directive';
import {ChangeColorComponent} from '../components/change-color/change-color.component';
import {ChangeColor2Component} from '../components/change-color2/change-color2.component';
import {ProviderDirective} from '../directives/provider.directive';
import {PARENT_PROVIDED} from '../injection-sample/constants';
import {ExportAsDirective} from '../directives/export-as.directive';
import {ContentChildSampleDirective} from '../directives/content-child-sample.directive';
import {ViewChildSampleDirective} from '../directives/view-child-sample.directive';
import {ContentChildSampleComponent} from '../content-child-sample/content-child-sample.component';

@Component({
  selector: 'app-directive-sample',
  standalone: true,
  imports: [CommonModule, ChangeColorDirective, ChangeColor2Directive, ChangeColorComponent, ChangeColor2Component, ProviderDirective, ExportAsDirective, ContentChildSampleDirective, ViewChildSampleDirective, ContentChildSampleComponent],
  templateUrl: './directive-sample.component.html',
  styleUrls: ['./directive-sample.component.scss'],
  providers: [{provide: PARENT_PROVIDED, useValue: 'ParentProvidedValue'}],

})
export class DirectiveSampleComponent {
  colorOfOutputSample: string = 'black';
  fontWeightOfOutputSample: string = 'normal';

  onColorChange($event: string) {
    console.log($event);
    this.colorOfOutputSample = $event;
  }

  onChangeFont($event: string) {
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
