import { JewelryItem } from "./jewelryItem";

export class BraceletItem extends JewelryItem {

    constructor(fields: any) {
      super(fields)
      for (const f in fields) {
        this[f] = fields[f];
      }
    }
  
  }
  
  export interface BraceletItem extends JewelryItem{
    name: string;
    image: string;
    description: string;
    materials: string;
    details: string;
    price: number;
  }