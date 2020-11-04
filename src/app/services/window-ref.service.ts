import { Injectable } from '@angular/core';

// Referencing global browser objects like 'document' or 'window' directly from within your code is possible,
// but not encouraged and considered bad practice.

// Especially since Angular 2 isn’t only designed to run within your browser,
// but also on mobile, the server or web workers where objects like 'window' may not be available.

// Therefore the suggested approach is to wrap such objects and inject them
// through the dependency injection mechanism. This way it is possible to change
// the concrete runtime instance of a given object based on the environment
// the Angular application is running.

function _window(): Window {
  // return the global native browser window object
  return window;
}

@Injectable({
  providedIn: 'root',
})
export class WindowRefService {
  get window(): Window {
    return _window();
  }

  reload() {
    return this.window.location.reload();
  }

  goTo(url: string) {
    return (this.window.location.href = url);
  }

  openInTab(url: string) {
    const newTab = this.window.open(url, '_blank');
    return (newTab.opener = null);
  }
}
