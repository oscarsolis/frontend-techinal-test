// core
import { Component } from '@angular/core';

// services
import { CartService } from '@core/services';

// models
import { Product } from '@models';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {

  //
  products: Array<Product> = [];

  constructor(private _cartService: CartService) {
    this.getProducts();
  }

  /**
   *
   */
  getProducts(): void {
    this.products = this._cartService.getProductsFromCart();
  }

}
