import { NgxLoggerLevel } from 'ngx-logger';
import { Environment } from './environment.model';

export const environment: Environment = {
  production: true,
  logLevel: NgxLoggerLevel.OFF
};
