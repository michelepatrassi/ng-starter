import { NgxLoggerLevel } from 'ngx-logger';

export interface Environment {
  production: boolean;
  logLevel: NgxLoggerLevel;
  hmr: boolean;
  firebase: {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
  };
}
