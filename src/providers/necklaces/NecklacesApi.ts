import { Injectable } from '@angular/core';

import { NecklaceItem } from '../../models/necklaceItem';
import { Api } from '../api/api';
import { Items } from '../items/items';

@Injectable()
export class NecklacesApi extends Items {

  constructor(public api: Api) {
      super(api);
   }

  query(params?: NecklaceItem) {
    return this.api.get('/items', params);
  }

  add(item: NecklaceItem) {
  }

  delete(item: NecklaceItem) {
  }

}
