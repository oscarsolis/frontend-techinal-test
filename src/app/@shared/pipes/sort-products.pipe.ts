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
  name: 'sortProducts'
})
export class SortProductsPipe implements PipeTransform {

  transform(
    produts: Array<Product>,
    value: string,
    direction: number = 1
  ): Array<Product> {
    if (!isDefined(value) || value === '') {
      return produts;
    }
    if (produts.length <= 1) {
      return produts;
    }
    switch (value) {
      case 'price': return this.comparePrice(produts, 'value', direction);
      case 'quantity': return this.compareNumber(produts, value, direction);
      case 'available': return this.compareBoolean(produts, value, direction);
    }
  }

  /**
   *
   */
  compareNumber(
    produts: Array<Product>,
    value: string,
    direction: number
  ): Array<Product> {
    return produts.sort((a, b) => (a[value] < b[value] ? -1 : 1) * direction);
  }

  /**
   *
   */
  comparePrice(
    produts: Array<Product>,
    value: string,
    direction: number
  ): Array<Product> {
    return produts.sort((a, b) => (a.getPrice() < b.getPrice() ? -1 : 1) * direction);
  }

  /**
   *
   */
  compareBoolean(
    produts: Array<Product>,
    value: string,
    direction: number
  ): Array<Product> {
    return produts.sort((a, b) => (a[value] - b[value]) * direction);
  }
}
