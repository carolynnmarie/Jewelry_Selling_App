export class JewelryItem{

  constructor(fields: any) {
    for (const f in fields) {
      this[f] = fields[f];
    }
  }

}


export interface JewelryItem{
  name: string;
  image: string;
  description: string;
  details: string;
  price: number;
}
