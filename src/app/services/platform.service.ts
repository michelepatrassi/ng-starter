import { NGXLogger } from 'ngx-logger';
import { Injectable, Inject, PLATFORM_ID, APP_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string,
    private logger: NGXLogger,
  ) {}

  isBrowser(): boolean {
    const isBrowserPlatform = isPlatformBrowser(this.platformId);
    const platform = isBrowserPlatform ? 'in the browser' : 'on the server';
    const logMessage = `Running ${platform} with appId=${this.appId}`;

    if (isBrowserPlatform) {
      this.logger.info(logMessage);
    } else {
      console.log(logMessage); // output on node console for debug
    }

    return isBrowserPlatform;
  }

  get currentPlatform(): Object {
    return this.platformId;
  }
}
