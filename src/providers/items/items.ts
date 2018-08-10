import { Injectable } from '@angular/core';

import { JewelryItem } from '../../models/jewelryItem';
import { Api } from '../api/api';

@Injectable()
export class Items {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/items', params);
  }

  add(item: JewelryItem) {
  }

  delete(item: JewelryItem) {
  }

}
