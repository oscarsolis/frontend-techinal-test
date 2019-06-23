// core
import {
  Pipe,
  PipeTransform
} from '@angular/core';

// models
import { Product } from '@models';

// utils
import { isDefined } from '@core/utils';

@Pipe({
  pure: false,
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(
    produts: Array<Product>,
    filterTerms: any
  ): Array<Product> {
    let produtsFilters: Array<Product> = [];
    let maxPrice = 0;
    let minPrice = 0;
    let quantity = 0;
    let available = true;

    if (!isDefined(filterTerms)) {
      return produts;
    }

    if (Number(filterTerms.price.min) !== 0 || Number(filterTerms.price.max) != 0) {
      minPrice = Number(filterTerms.price.min);
      maxPrice = Number(filterTerms.price.max);
      produtsFilters = produts.filter(produt => produt.getPrice() >= minPrice && produt.getPrice() <= maxPrice);
    }

    if (Number(filterTerms.quantity)) {
      quantity = Number(filterTerms.quantity);
      produtsFilters = produtsFilters.filter(produt => produt.quantity >= quantity);
    }

    if (filterTerms.available != '') {
      available = filterTerms.available === 'true';
      produtsFilters = produtsFilters.filter(produt => produt.available === available);
    }

    if (filterTerms.key) {
      produtsFilters = produtsFilters.filter(produt => produt.name.toString().indexOf(filterTerms.key) > -1);
    }

    return produtsFilters;
  }
}
