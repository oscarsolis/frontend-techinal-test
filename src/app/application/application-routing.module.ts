// core
import { NgModule } from '@angular/core';

// routing
import {
  Routes,
  RouterModule
} from '@angular/router';

// components
import { ApplicationComponent } from './application.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home'
  },
  {
    path: '',
    component: ApplicationComponent,
    children: [
      {
        path: 'shopping-cart',
        loadChildren: './shopping-cart/shopping-cart.module#ShoppingCartModule'
      },
      {
        path:'categories',
        loadChildren: './categories/categories.module#CategoriesModule'
      },
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
