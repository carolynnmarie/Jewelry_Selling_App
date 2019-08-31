import { Injectable } from '@angular/core';

import { JewelryItem } from '../../models/jewelryItem';

@Injectable()
export class Items {
  items: JewelryItem[] = [];

  defaultItem: any = {
    name: "bBlackGlassBlueTealSeed bracelet",
    profilePic: "assets/jewelrypics/jewelryapppics/bBlackGlassBlueTealSeed.jpg",
    description: "This is a bracelet.",
    type: "bracelet",
    price: "$15.00"
  };


  constructor() {
    let items = [
      {
        name: "BlackGlassBlueTealSeed bracelet",
        profilePic: "assets/jewelrypics/jewelryapppics/bBlackGlassBlueTealSeed.jpg",
        description: "This is a bracelet.",
        type: "bracelet",
        price: "$15.00"
      },
      {
        name: "BlackBiconeCluster earrings",
        profilePic: "assets/jewelrypics/jewelryapppics/eBlackBiconeCluster.jpg",
        description: "These are earrings.",
        type: "earrings",
        price: "$15.00"
      },
      {
        name: "Butterfly necklace",
        profilePic: "assets/jewelrypics/jewelryapppics/nButterfly.jpg",
        description: "This is my favorite necklace.",
        type: "necklace",
        price: "$35.00"
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
