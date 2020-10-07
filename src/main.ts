import { hmrBootstrap } from './hmr';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootloader } from '@angularclass/hmr';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const main = () => {
  if (environment.production) {
    enableProdMode();
  }

  const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

  if (environment.hmr) {
    if (module['hot']) {
      return hmrBootstrap(module, bootstrap);
    } else {
      console.error('HMR is not enabled for webpack-dev-server!');
      console.log('Are you using the --hmr flag for ng serve?');
    }
  } else {
    bootstrap().catch((err) => console.log(err));
  }
};

// boot on document ready
bootloader(main);
