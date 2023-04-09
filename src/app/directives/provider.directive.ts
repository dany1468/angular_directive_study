import {Directive, Host, Inject, inject, OnInit, Optional} from '@angular/core';
import {PARENT_PROVIDED, ROOT_PROVIDED, SAMPLE_TOKEN} from '../injection-sample/constants';

@Directive({
  selector: '[appProvider]',
  standalone: true,
  providers: [{provide: SAMPLE_TOKEN, useValue: 'sample value'}]
})
export class ProviderDirective implements OnInit {
  providedValue = inject(SAMPLE_TOKEN);
  // read from parent component
  parentProvidedValue = inject(PARENT_PROVIDED);

  rootProvidedValue = inject(ROOT_PROVIDED);
  constructor(
    @Inject(SAMPLE_TOKEN) private providedValueFromConstructor: string,
    // Host に限定するため取得できない
    @Host() @Optional() @Inject(PARENT_PROVIDED) private parentProvidedValueFromConstructor: string,
    @Optional() @Inject(PARENT_PROVIDED) private parentProvidedValueFromConstructor2: string,
    @Inject(ROOT_PROVIDED) private rootProvidedValueFromConstructor: string,
    ) { }

  ngOnInit() {
    console.log(`provided value: ${this.providedValue}`);
    console.log(`parent provided value: ${this.parentProvidedValue}`);
    console.log(`root provided value: ${this.rootProvidedValue}`);

    console.log(`provided value from constructor: ${this.providedValueFromConstructor}`);
    console.log(`parent provided value from constructor: ${this.parentProvidedValueFromConstructor}`);
    console.log(`parent provided value from constructor 2: ${this.parentProvidedValueFromConstructor2}`);
    console.log(`root provided value from constructor: ${this.rootProvidedValueFromConstructor}`);
  }
}
