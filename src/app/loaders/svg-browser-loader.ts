import { SvgHttpLoader, SvgLoader } from 'angular-svg-icon';
import {
  StateKey,
  TransferState,
  makeStateKey,
} from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class SvgBrowserLoader implements SvgLoader {
  constructor(private transferState: TransferState, private http: HttpClient) {}

  getSvg(url: string): Observable<string> {
    const key: StateKey<number> = makeStateKey<number>('transfer-svg:' + url);
    const data = this.transferState.get(key, null);
    // First we are looking for the translations in transfer-state, if none found, http load as fallback
    if (data) {
      return new Observable((observer) => {
        observer.next(data);
        observer.complete();
      });
    } else {
      return new SvgHttpLoader(this.http).getSvg(url);
    }
  }
}
