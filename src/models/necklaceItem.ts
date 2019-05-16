import { JewelryItem } from "./jewelryItem";

export class NecklaceItem extends JewelryItem {

    constructor(fields: any) {
        super(fields);
      for (const f in fields) {
        this[f] = fields[f];
      }
    }
}

export interface NecklaceItem extends JewelryItem {
    name: string;
    image: string;
    description: string;
    length: string;
    materials: string;
    details: string;
    price: number;
}