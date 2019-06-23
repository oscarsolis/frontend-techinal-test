// core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { NotFoundRoutingModule } from './not-found-routing.module';

// components
import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ],
  declarations: [NotFoundComponent]
})
export class NotFoundModule { }
