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

//
declare var $: any;

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
    this.setupNavbar();

  }

  /**
   *
   */
  private _updateCart(): void {
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

  setupNavbar(): void {


    $(document).ready(function () {
      $('.navbar .dropdown-item').on('click', function (e) {
        var $el = $(this).children('.dropdown-toggle');
        var $parent = $el.offsetParent(".dropdown-menu");
        $(this).parent("li").toggleClass('open');

        if (!$parent.parent().hasClass('navbar-nav')) {
          if ($parent.hasClass('show')) {
            $parent.removeClass('show');
            $el.next().removeClass('show');
            $el.next().css({ "top": -999, "left": -999 });
          } else {
            $parent.parent().find('.show').removeClass('show');
            $parent.addClass('show');
            $el.next().addClass('show');
            if ($el[0]) {
              $el.next().css({ "top": $el[0].offsetTop, "left": $parent.outerWidth() - 4 });
            }
          }
          e.preventDefault();
          e.stopPropagation();
        }
      });

      $('.navbar .dropdown').on('hidden.bs.dropdown', function () {
        $(this).find('li.dropdown').removeClass('show open');
        $(this).find('ul.dropdown-menu').removeClass('show open');
      });
    });
  }
}
