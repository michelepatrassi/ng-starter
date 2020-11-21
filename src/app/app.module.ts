import { BrowserModule, TransferState } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerModule } from 'ngx-logger';
import { environment } from '../environments/environment';
import {
  AngularFirestoreModule,
  SETTINGS as FIRESTORE_SETTINGS,
} from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { SvgBrowserLoader } from './loaders/svg-browser-loader';
import { AngularSvgIconModule, SvgLoader } from 'angular-svg-icon';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    TransferHttpCacheModule,
    AppRoutingModule,
    LoggerModule.forRoot({ level: environment.logLevel }),
    AngularFireModule.initializeApp(environment.firebase.config),
    AngularFirestoreModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot({
      loader: {
        provide: SvgLoader,
        useFactory: (transferState, http) =>
          new SvgBrowserLoader(transferState, http),
        deps: [TransferState, HttpClient],
      },
    }),
  ],
  providers: [
    {
      provide: FIRESTORE_SETTINGS,
      useValue: environment.firebase.emulator
        ? {
            host: 'localhost:8080',
            ssl: false,
          }
        : undefined,
    },
    { provide: APP_BASE_HREF, useValue: '' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
