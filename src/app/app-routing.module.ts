import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyModule } from './lazy/lazy.module';

const routes: Routes = [
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then((m) => m.LazyModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
    LazyModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
