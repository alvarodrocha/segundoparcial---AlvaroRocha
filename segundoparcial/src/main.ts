import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideServiceWorker } from '@angular/service-worker';
import { isDevMode } from '@angular/core';


bootstrapApplication(App, {

  providers: [

    provideServiceWorker('ngsw-worker.js', { enabled: !isDevMode() }),

  ],

});
