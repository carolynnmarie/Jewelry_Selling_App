import { Injectable } from '@angular/core';

import { JewelryItem } from '../../models/jewelryItem';

@Injectable()
export class Items {
  items: JewelryItem[] = [];

  defaultItem: any = {
    "name": "bBlackGlassBlueTealSeed bracelet",
    "profilePic": "assets/jewelrypics/jewelryapppics/bBlackGlassBlueTealSeed.jpg",
    "about": "This is a bracelet.",
  };


  constructor() {
    let items = [
      {
        "name": "BlackGlassBlueTealSeed bracelet",
        "profilePic": "assets/jewelrypics/jewelryapppics/bBlackGlassBlueTealSeed.jpg",
        "about": "This is a bracelet.",
      },
      {
        "name": "BlackBiconeCluster earrings",
        "profilePic": "assets/jewelrypics/jewelryapppics/eBlackBiconeCluster.jpg",
        "about": "These are earrings."
      },
      {
        "name": "Butterfly necklace",
        "profilePic": "assets/jewelrypics/jewelryapppics/nButterfly.jpg",
        "about": "This is my favorite necklace."
      }
    ];
    
    for (let item of items) {
      this.items.push(new JewelryItem(item));
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

  add(item: JewelryItem) {
    this.items.push(item);
  }

  delete(item: JewelryItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
