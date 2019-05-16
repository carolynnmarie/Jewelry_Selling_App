export class NecklaceItem {

    constructor(fields: any) {
      for (const f in fields) {
        this[f] = fields[f];
      }
    }
}

export interface NecklaceItem {
    name: string;
    image: string;
    description: string;
    length: string;
    materials: string;
    details: string;
    price: number;
}