// core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { ApplicationRoutingModule } from './application-routing.module';

// components
import {
  NavbarComponent,
  FooterComponent
} from './components';
import { ApplicationComponent } from './application.component';

@NgModule({
  imports: [
    CommonModule,
    ApplicationRoutingModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    ApplicationComponent
  ]
})
export class ApplicationModule { }
