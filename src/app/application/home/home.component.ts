// core
import { Component } from '@angular/core';

// services
import { ProductsService } from '@core/services';

// models
import { Product } from '@models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  //
  bestProducts: Array<Product> = [];

  constructor(private _productsService: ProductsService) {
    this.getBestProducts();
  }

  /**
   *
   */
  async getBestProducts() {
    try {
      const data = await this._productsService.getBestProducts();
      this.bestProducts = data;
    } catch (error) {
      console.log(error);
    }
  }
}
