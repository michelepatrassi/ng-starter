import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerModule } from 'ngx-logger';
import { environment } from '../environments/environment';
import { hmrOnInit, hmrOnDestroy, hmrAfterOnDestroy } from '../hmr';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    LoggerModule.forRoot({ level: environment.logLevel }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}

  hmrOnInit = (store) => hmrOnInit(store, this.appRef);
  hmrOnDestroy = (store) => hmrOnDestroy(store, this.appRef);
  hmrAfterDestroy = (store) => hmrAfterOnDestroy(store);
}
