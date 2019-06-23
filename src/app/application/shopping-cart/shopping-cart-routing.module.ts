// core
import { NgModule } from '@angular/core';

// routing
import {
  Routes,
  RouterModule
} from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart.component';

const routes: Routes = [{
  path: '',
  component: ShoppingCartComponent,
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }
