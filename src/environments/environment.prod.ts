import { NgxLoggerLevel } from 'ngx-logger';
import { Environment } from './environment.model';

export const environment: Environment = {
  production: true,
  logLevel: NgxLoggerLevel.OFF,
  hmr: false,
  firebase: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
  },
};
