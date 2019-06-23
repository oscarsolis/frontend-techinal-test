//
import {
  OnInit,
  Component
} from '@angular/core';

// services
import {
  CartService,
  NavbarService,
  CategoriesService,
} from '@core/services';

// rxjs
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  //
  categories: Array<any> = [];

  //
  updateCart: Subscription;

  //
  totalProducts: number = 0;

  constructor(
    private _cartService: CartService,
    private _navbarService: NavbarService,
    private _categoriesService: CategoriesService
  ) {
    this._updateCart();
    this.updateCart = this._navbarService
      .updateCart
      .subscribe(() => this._updateCart());
  }

  /**
   *
   */
  ngOnInit() {
    this.getCategories();
  }

  /**
   *
   */
  private _updateCart(): void {
    console.log(this._cartService.getProductsFromCart());
    this.totalProducts = this._cartService.getProductsFromCart().length || 0;
  }

  /**
   *
   */
  async getCategories() {
    try {
      const data = await this._categoriesService.getCategories();
      this.categories = data.categories;
    } catch (error) {
      console.error(error);
    }
  }
}
