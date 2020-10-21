import { Environment } from './environment.model';
import { NgxLoggerLevel } from 'ngx-logger';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: Environment = {
  production: false,
  logLevel: NgxLoggerLevel.TRACE,
  hmr: false,
  firebase: {
    apiKey: 'AIzaSyCVwlPMrGhyv4mi7BDuKifFUpxii0SX5yg',
    authDomain: 'webinar-development-fa42e.firebaseapp.com',
    databaseURL: 'https://webinar-development-fa42e.firebaseio.com',
    projectId: 'webinar-development-fa42e',
    storageBucket: 'webinar-development-fa42e.appspot.com',
    messagingSenderId: '1036883961847',
    appId: '1:1036883961847:web:9cf62dea897f8e36ae30f2',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
