// core
import {
  Input,
  Component
} from '@angular/core';

// models
import { Product } from '@models';

// services
import {
  CartService,
  NavbarService
} from '@core/services';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {

  //
  @Input('product') product: Product;

  //
  @Input('showButtonAdd') showButtonAdd: boolean = true;

  //
  @Input('keyToSearch') keyToSearch = '';

  constructor(
    private _cartService: CartService,
    private _navbarService: NavbarService
  ) { }

  /**
   *
   */
  addItem(product: Product): void {
    product.selected = true;
    product.totalProducts = 1;
    product.total = product.getPrice();
    this._cartService.addProducts(product);
    this._navbarService.triggerUpdateCart();
  }
}
