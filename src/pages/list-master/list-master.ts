import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { JewelryItem } from '../../models/jewelryItem';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: JewelryItem[];

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: JewelryItem) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
