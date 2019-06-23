// core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';

// components
import { ShoppingCartComponent } from './shopping-cart.component';

// modules
import { SharedModule } from '@shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ShoppingCartRoutingModule
  ],
  declarations: [
    ShoppingCartComponent
  ]
})
export class ShoppingCartModule { }
