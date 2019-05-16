import { JewelryItem } from "./jewelryItem";

export class EarringsItem extends JewelryItem {

    constructor(fields: any) {
      super(fields);
      for (const f in fields) {
        this[f] = fields[f];
      }
    }
  
  }
  
  export interface EarringsItem extends JewelryItem {
    name: string;
    image: string;
    description: string;
    materials: string;
    earWireType: string;
    details: string;
    price: number;
  }