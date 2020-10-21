import { NotFoundComponent } from './pages/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './pages/error.component';
import { ROUTES } from '../../consts/routes';

const routes: Routes = [
  { path: ROUTES.error.notFound, component: NotFoundComponent },
  { path: '', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
