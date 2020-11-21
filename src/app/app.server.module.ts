import { NgModule } from '@angular/core';
import {
  ServerModule,
  ServerTransferStateModule,
} from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from '../environments/environment.prod';
import { AngularSvgIconModule, SvgLoader } from 'angular-svg-icon';
import { SvgServerLoader } from './loaders/svg-server-loader';
import { APP_NAME } from '@ng-starter/shared';
import { TransferState } from '@angular/platform-browser';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    AngularSvgIconModule.forRoot({
      loader: {
        provide: SvgLoader,
        useFactory: (transferState) =>
          new SvgServerLoader(`dist/${APP_NAME}/browser`, transferState),
        deps: [TransferState],
      },
    }),
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: environment.domain }],
})
export class AppServerModule {}
