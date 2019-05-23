import { Injectable } from '@angular/core';

import { Items } from './items';
import { BraceletItem } from '../../models/BraceletItem';

@Injectable()
export class BraceletMockProvider extends Items {
  items: BraceletItem[] = [];

  defaultItem: any = {
    name: "bBlackGlassBlueTealSeed bracelet",
    profilePic: "assets/jewelrypics/jewelryapppics/bBlackGlassBlueTealSeed.jpg",
    description: "This is a bracelet.",
    type: "bracelet",
    price: "$15.00"
  };


  constructor() {
      super();
    let items = [
      {
        name: "BlackGlassBlueTealSeed bracelet",
        profilePic: "assets/jewelrypics/jewelryapppics/bBlackGlassBlueTealSeed.jpg",
        description: "This is a bracelet.",
        type: "bracelet",
        price: "$15.00"
      }
    ];
    for (let item of items) {
      this.items.push(new BraceletItem(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: BraceletItem) {
    this.items.push(item);
  }

  delete(item: BraceletItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
