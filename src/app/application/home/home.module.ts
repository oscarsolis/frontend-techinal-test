// core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { HomeRoutingModule } from './home-routing.module';

// components
import { HomeComponent } from './home.component';

// modules
import { SharedModule } from '@shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
