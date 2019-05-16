export class EarringsItem{

    constructor(fields: any) {
      for (const f in fields) {
        this[f] = fields[f];
      }
    }
  
  }
  
  export interface EarringsItem{
    name: string;
    image: string;
    description: string;
    materials: string;
    earWireType: string;
    details: string;
    price: number;
  }