// define route array
import {Route} from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: 'directive-sample',
    loadComponent: () => import('./directive-sample/directive-sample.component').then(m => m.DirectiveSampleComponent)
  }
];
