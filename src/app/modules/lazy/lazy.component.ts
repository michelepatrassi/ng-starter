import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lazy',
  template: ` <p>{{ title$ | async }}</p>`,
  styles: [],
})
export class LazyComponent {
  title$: Observable<string>;

  constructor(firestore: AngularFirestore) {
    this.title$ = firestore
      .doc<{
        title: string;
      }>('test/lazy')
      .valueChanges()
      .pipe(map((data) => data.title));
  }
}
