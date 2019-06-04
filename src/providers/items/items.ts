import { Injectable } from '@angular/core';

import { JewelryItem } from '../../models/jewelryItem';
import { Api } from '../api/api';

@Injectable()
export class Items {

  items: JewelryItem[] = [];

  constructor(public api: Api) {
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
   }

  query(params?: JewelryItem) {
    let items = this.api.get('/items', params)
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
  }

  delete(item: JewelryItem) {
  }

}
