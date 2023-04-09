import { Directive } from '@angular/core';

@Directive({
  selector: '[appExportAs]',
  standalone: true,
  exportAs: 'exportAsSample'
})
export class ExportAsDirective {
  get exportedValue() {
    return 'exported value';
  }
  constructor() { }

}
