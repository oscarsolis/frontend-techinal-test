// core
import { Component } from '@angular/core';

// services
import {
  AlertService,
  CartService,
  NavbarService,
} from '@core/services';

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

  constructor(
    private _cartService: CartService,
    private _alertService: AlertService,
    private _navbarService: NavbarService
  ) {
    this.getProducts();
  }

  /**
   *
   */
  getProducts(): void {
    this.products = this._cartService.getProductsFromCart();
  }

  /**
   *
   */
  removeProduct(product: Product): void {
    this._cartService.removeProduct(product.id);
    this.getProducts();
    this._navbarService.triggerUpdateCart();
  }

  /**
   *
   */
  updateItem(_product: Product, quantity: number): void {
    if (_product.totalProducts !== 0) {
      _product.totalProducts += quantity;
      _product.total = _product.getPrice() * _product.totalProducts;
      const index: number = this.products.findIndex(product => product.id === _product.id);
      if (index !== -1) {
        this.products[index] = _product;
        this._cartService.updateProduct(_product);
      }
    }
  }

  /**
   *
   */
  finalizePurchase(): void {
    this._alertService
      .swalConfirm('¿Esta seguro que desea finalizar la compra?')
      .then(result => {
        if (result.value) {
          this._cartService.clearCart();
          this.products = [];
          this._navbarService.triggerUpdateCart();
          this._alertService.swalBasic('Compra realizada correctamente', 'success');
        }
      });
  }

}
