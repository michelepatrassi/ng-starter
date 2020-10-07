import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerModule } from 'ngx-logger';
import { environment } from '../environments/environment';
import { hmrOnInit, hmrOnDestroy, hmrAfterOnDestroy } from '../hmr';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoggerModule.forRoot({ level: environment.logLevel }),
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
