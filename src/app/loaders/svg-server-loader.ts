import { SvgLoader } from 'angular-svg-icon';
import {
  StateKey,
  TransferState,
  makeStateKey,
} from '@angular/platform-browser';
import { Observable } from 'rxjs';

const fs = require('fs');
const join = require('path').join;

export class SvgServerLoader implements SvgLoader {
  constructor(
    private browserFolder: string,
    private transferState: TransferState,
  ) {}

  getSvg(url: string): Observable<string> {
    const browserFolder = join(process.cwd(), this.browserFolder);
    const filePath = join(browserFolder, url);

    return new Observable((observer) => {
      const svgData = fs.readFileSync(filePath, 'utf8');

      // Here we save the translations in the transfer-state
      const key: StateKey<number> = makeStateKey<number>('transfer-svg:' + url);
      this.transferState.set(key, svgData);

      observer.next(svgData);
      observer.complete();
    });
  }
}
