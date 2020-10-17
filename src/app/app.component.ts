import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title$: Observable<string>;

  constructor(firestore: AngularFirestore) {
    this.title$ = firestore
      .doc<{
        title: string;
      }>('test/app')
      .valueChanges()
      .pipe(map((data) => data.title));
  }
}
