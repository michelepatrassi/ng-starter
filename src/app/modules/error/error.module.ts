import { NotFoundComponent } from './pages/not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { ErrorComponent } from './pages/error.component';

@NgModule({
  declarations: [ErrorComponent, NotFoundComponent],
  imports: [CommonModule, ErrorRoutingModule],
})
export class ErrorModule {}
