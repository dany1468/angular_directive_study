import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {provideRouter} from '@angular/router';
import {ROUTES} from './app/routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(ROUTES)
  ]
});

