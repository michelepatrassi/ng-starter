import { NgModule } from '@angular/core';
import {
  ServerModule,
  ServerTransferStateModule,
} from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from '../environments/environment.prod';

@NgModule({
  imports: [AppModule, ServerModule, ServerTransferStateModule],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: environment.domain }],
})
export class AppServerModule {}
