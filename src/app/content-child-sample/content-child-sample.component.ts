import {Component, ContentChild, ContentChildren, QueryList, ViewChildren} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentChildSampleDirective} from '../directives/content-child-sample.directive';
import {ViewChildSampleDirective} from '../directives/view-child-sample.directive';

@Component({
  selector: 'app-content-child-sample',
  standalone: true,
  imports: [CommonModule, ViewChildSampleDirective],
  templateUrl: './content-child-sample.component.html',
  styleUrls: ['./content-child-sample.component.scss'],
  queries: {
    contentChildren: new ContentChildren(ContentChildSampleDirective),
    viewChildren: new ViewChildren(ViewChildSampleDirective)
  }
})
export class ContentChildSampleComponent {

  contentChildren!: QueryList<ContentChildSampleDirective>;
  viewChildren!: QueryList<ViewChildSampleDirective>;

  ngAfterContentInit() {
    console.log(`contentChildren count: ${this.contentChildren.length}`);
  }

  ngAfterViewInit() {
    console.log(`viewChildren count: ${this.viewChildren.length}`);
  }
}
