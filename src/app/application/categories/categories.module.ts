// core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { CategoriesRoutingModule } from './categories-routing.module';

// components
import { ProductsByCategoryComponent } from './products-by-category/products-by-category.component';

// modules
import { SharedModule } from '@shared';

//
import { NgxMaskModule } from 'ngx-mask'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxMaskModule.forRoot(),
    CategoriesRoutingModule
  ],
  declarations: [
    ProductsByCategoryComponent
  ]
})
export class CategoriesModule { }
