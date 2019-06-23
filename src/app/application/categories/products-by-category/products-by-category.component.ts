// core
import { Component } from '@angular/core';

// services
import { ProductsService } from '@core/services';

// routing
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.scss']
})
export class ProductsByCategoryComponent {

  //
  products: Array<any> = [];

  //
  orderingTerms: Array<any> = [
    {
      key: '',
      direction: -1,
      title: 'Ordenar Por'
    },
    {
      key: 'price',
      direction: 1,
      title: 'Menor a Mayor Precio'
    },
    {
      key: 'price',
      direction: -1,
      title: 'Mayor a Menor Precio'
    },
    {
      key: 'quantity',
      direction: 1,
      title: 'Menor cantidad en stock'
    },
    {
      key: 'quantity',
      direction: -1,
      title: 'Mayor cantidad en stock'
    },
    {
      key: 'available',
      direction: -1,
      title: 'Disponibles'
    },
    {
      key: 'available',
      direction: 1,
      title: 'Agotado'
    }
  ];

  //
  filtersTerm = {
    available: '',
    price: {
      max: 100000,
      min: 0
    },
    quantity: 1,
    key: ''
  };

  //
  sort: any = {};

  constructor(
    private activedRoute: ActivatedRoute,
    private _productsService: ProductsService
  ) {
    this.getProducts();
    this.sort = this.orderingTerms[0];
  }

  /**
   *
   */
  getProducts(): void {
    this.activedRoute
      .paramMap
      .subscribe(params => {
        const categoryId = params.get('id');
        this._productsService
          .getProductsByCategory(Number(categoryId))
          .then(data => this.products = data)
          .catch(error => { });
      });
  }

}
