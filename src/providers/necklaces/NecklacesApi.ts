import { Injectable } from '@angular/core';

import { NecklaceItem } from '../../models/necklaceItem';
import { Api } from '../api/api';

@Injectable()
export class NecklacesApi {

  constructor(public api: Api) { }

  query(params?: NecklaceItem) {
    return this.api.get('/items', params);
  }

  add(item: NecklaceItem) {
  }

  delete(item: NecklaceItem) {
  }

}
