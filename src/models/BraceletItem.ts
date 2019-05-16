export class BraceletItem{

    constructor(fields: any) {
      for (const f in fields) {
        this[f] = fields[f];
      }
    }
  
  }
  
  export interface BraceletItem{
    name: string;
    image: string;
    description: string;
    materials: string;
    details: string;
    price: number;
  }