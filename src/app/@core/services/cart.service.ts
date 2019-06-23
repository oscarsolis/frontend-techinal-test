// core
import { Injectable } from '@angular/core';

// localStorage
import { PRODUCTS } from '@config/localstorage-keys.config';

//
import { Product } from '@models';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor() { }

  /**
   *
   */
  getProductsFromCart(): Array<Product> {
    const products: Array<any> = JSON.parse(localStorage.getItem(PRODUCTS)) || [];
    return products.map(product => {
      product = Object.assign(product, { formattedPrice: product.price, sublevelId: product.sublevel_id });
      return Object.assign(new Product(), product);
    });
  }

  /**
   *
   */
  removeProduct(productId: string): void {
    let products: Array<Product> = this.getProductsFromCart();
    products = products.filter(product => product.id === productId);
    localStorage.setItem(PRODUCTS, JSON.stringify(products));
  }

  /**
   *
   */
  addProducts(product:Product):void{
    const products: Array<Product> = this.getProductsFromCart();
    products.push(product);
    localStorage.setItem(PRODUCTS, JSON.stringify(products));
  }
}
