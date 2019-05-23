import { Injectable } from '@angular/core';

import { JewelryItem } from '../../models/jewelryItem';
import { Api } from '../api/api';
import { Items } from '../items/items';

export class BraceletsApi extends Items {
    constructor(public api: Api) {
        super(api);
    }

  query(params?: JewelryItem) {
    return this.api.get('/bracelets', params);
  }

  add(item: JewelryItem) {
  }

  delete(item: JewelryItem) {
  }

}