import { NgxLoggerLevel } from 'ngx-logger';

export interface Environment {
  production: boolean;
  logLevel: NgxLoggerLevel;
  hmr: boolean;
}