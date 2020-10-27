import { environment } from './../../environments/environment';
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { MetaTags } from '../models';
import { PlatformService } from './platform.service';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(
    private meta: Meta,
    private title: Title,
    private location: Location,
    private platform: PlatformService,
  ) {}

  updateMetaTags(tags: MetaTags) {
    const { title, description, image, url } = tags;

    this.meta.updateTag({ property: 'og:title', content: title });
    this.title.setTitle(`${title}`);

    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ name: 'description', content: description });

    this.meta.updateTag({ property: 'og:url', content: url });

    if (tags.hasOwnProperty('keywords')) {
      this.meta.updateTag({ name: 'keywords', content: tags.keywords });
    }

    if (tags.hasOwnProperty('image')) {
      this.meta.updateTag({ property: 'og:image', content: image.url });
      this.meta.updateTag({
        property: 'og:image:width',
        content: `${image.width}`,
      });
      this.meta.updateTag({
        property: 'og:image:height',
        content: `${image.height}`,
      });
    }
  }

  /**
   * the value of APP_BASE_HREF DI token is used to generate the absolute url
   * on the server, corresponds to the domain name
   * on the client is empty, so we manually prepend the domain to always have the absolute url
   */
  getAbsoluteUrl(relativeUrl: string): string {
    const externalUrl = this.location.prepareExternalUrl(relativeUrl);
    if (this.platform.isBrowser()) {
      return `${environment.domain}${externalUrl}`;
    } else {
      return externalUrl;
    }
  }
}
