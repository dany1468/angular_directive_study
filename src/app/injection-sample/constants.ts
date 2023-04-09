import {InjectionToken} from '@angular/core';

export const SAMPLE_TOKEN = new InjectionToken('sampleToken');
export const PARENT_PROVIDED = new InjectionToken('ParentProvided');

export const ROOT_PROVIDED = new InjectionToken('RootProvided',
  { providedIn: 'root', factory: () => 'root provided value' }
);
