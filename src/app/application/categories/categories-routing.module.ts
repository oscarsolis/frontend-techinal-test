// core
import { NgModule } from '@angular/core';

// routing
import {
  Routes,
  RouterModule
} from '@angular/router';

// components
import { ProductsByCategoryComponent } from './products-by-category/products-by-category.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'products/23'
  },
  {
    path: '',
    children: [
      {
        path: 'products/:id',
        component: ProductsByCategoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
