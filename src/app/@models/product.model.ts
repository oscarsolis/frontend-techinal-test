export class Product {

  available: boolean;
  id: string;
  name: string;
  formattedPrice: string;
  quantity: number;
  sublevelId: number;

  constructor() { }

  getPrice(): number {
    const price = this.formattedPrice.replace('$', '');
    return Number(price.replace(',', '.'))
  }

}
