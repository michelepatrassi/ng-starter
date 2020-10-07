import { NgModuleRef } from '@angular/core';
import { hmrModule, createNewHosts, createInputTransfer, removeNgStyles } from '@angularclass/hmr';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const hmrBootstrap = (module, bootstrap: () => Promise<NgModuleRef<any>>) => {
  return bootstrap().then((ngModuleRef) => {
    return hmrModule(ngModuleRef, module);
  });
};

export const hmrOnInit = (store, appRef) => {
  if (!store) {
    return;
  }

  if ('restoreInputValues' in store) {
    store.restoreInputValues();
  }
  appRef.tick();
  delete store.restoreInputValues;
};

export const hmrOnDestroy = (store, appRef) => {
  const cmpLocation = appRef.components.map((cmp) => cmp.location.nativeElement);
  store.disposeOldHosts = createNewHosts(cmpLocation);
  store.restoreInputValues = createInputTransfer();
  removeNgStyles();
};

export const hmrAfterOnDestroy = (store) => {
  store.disposeOldHosts();
  delete store.disposeOldHosts;
};
