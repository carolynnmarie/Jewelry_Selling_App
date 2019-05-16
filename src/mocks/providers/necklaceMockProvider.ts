import { Injectable } from '@angular/core';
import { NecklaceItem } from '../../models/necklaceItem';
import { Items } from './items';



@Injectable()
export class NecklaceMockProvider extends Items {
  items: NecklaceItem[] = [];

  defaultItem: any = {
    name: "Butterfly necklace",
    profilePic: "assets/jewelrypics/jewelryapppics/nButterfly.jpg",
    description: "This is my favorite necklace.",
    type: "necklace",
    price: "$35.00"
  };


  constructor() {
      super();
    let items = [
      {
        name: "Butterfly necklace",
        profilePic: "assets/jewelrypics/jewelryapppics/nButterfly.jpg",
        description: "This is my favorite necklace.",
        type: "necklace",
        price: "$35.00"
      }
    ];
    for (let item of items) {
      this.items.push(new NecklaceItem(item));
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

  add(item: NecklaceItem) {
    this.items.push(item);
  }

  delete(item: NecklaceItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
