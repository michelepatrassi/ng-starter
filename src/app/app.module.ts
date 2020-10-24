import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, NgModule } from '@angular/core';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerModule } from 'ngx-logger';
import { environment } from '../environments/environment';
import { hmrOnInit, hmrOnDestroy, hmrAfterOnDestroy } from '../hmr';
import {
  AngularFirestoreModule,
  SETTINGS as FIRESTORE_SETTINGS,
} from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { HttpClientModule } from '@angular/common/http';

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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}

  hmrOnInit = (store) => hmrOnInit(store, this.appRef);
  hmrOnDestroy = (store) => hmrOnDestroy(store, this.appRef);
  hmrAfterDestroy = (store) => hmrAfterOnDestroy(store);
}
