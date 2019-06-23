export class Product {

  available: boolean;
  id: string;
  name: string;
  formattedPrice: string;
  quantity: number;
  sublevelId: number;
  selected: boolean;
  total: number;
  totalProducts: number;

  constructor() { }

  getPrice(): number {
    const price = this.formattedPrice.replace('$', '');
    return Number(price.replace(',', '.'))
  }

}
