import { Injectable } from '@angular/core';

import { JewelryItem } from '../../models/jewelryItem';
import { Items } from './items';
import { EarringsItem } from '../../models/EarringsItem';

@Injectable()
export class EarringsMockProvider extends Items {
  items: EarringsItem[] = [];

  defaultItem: any = {
    name: "BlackBiconeCluster earrings",
    profilePic: "assets/jewelrypics/jewelryapppics/eBlackBiconeCluster.jpg",
    description: "These are earrings.",
    type: "earrings",
    price: "$15.00"
  };


  constructor() {
      super();
    let items = [
      {
        name: "BlackBiconeCluster earrings",
        profilePic: "assets/jewelrypics/jewelryapppics/eBlackBiconeCluster.jpg",
        description: "These are earrings.",
        type: "earrings",
        price: "$15.00"
      }];
    for (let item of items) {
      this.items.push(new EarringsItem(item));
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

  add(item: EarringsItem) {
    this.items.push(item);
  }

  delete(item: EarringsItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
