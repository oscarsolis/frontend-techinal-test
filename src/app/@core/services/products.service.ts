// core
import { Injectable } from '@angular/core';

//
import { HttpClient } from '@angular/common/http';

//
import { ENDPOINTS } from '@config/endpoints';

//
import { TIMEOUT_TIME_IN_SECONDS } from '@config/global';

//
import { Product } from '@models';

//
import { CartService } from '@core/services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private _http: HttpClient,
    private _cartService: CartService
  ) { }

  /**
   *
   */
  getProductsByCategory(categoryId: number): Promise<Array<Product>> {
    return new Promise((resolve, reject) => {
      this._http.get(ENDPOINTS.products)
        .toPromise()
        .then((result: any) => {
          let products: Array<any> = result.products.filter(product => Number(product.sublevel_id) === Number(categoryId));
          const productsInCart: Array<any> = this._cartService.getProductsFromCart();
          products = products.map(product => {
            product.selected = false;
            const _product = productsInCart.find(p => p.id === product.id);
            if (_product) {
              product.selected = true;
            }
            return product;
          });
          resolve(this.mapArray(products));
        })
        .catch(errror => reject(errror));
    });
  }

  /**
   *
   */
  getBestProducts(): Promise<Array<Product>> {
    return new Promise((resolve, reject) => {
      this._http.get(ENDPOINTS.products)
        .toPromise()
        .then((result: any) => {
          let products: Array<any> = result.products.filter(product => product.available);
          products = products.slice(0, 10);

          resolve(this.mapArray(products));
        })
        .catch(errror => reject(errror));
    });
  }

  /**
   *
   */
  mapArray(array: Array<any>): Array<Product> {
    return array.map(product => {
      product = Object.assign(product, { formattedPrice: product.price, sublevelId: product.sublevel_id, total: 0 });
      return Object.assign(new Product(), product);
    });
  }
}
