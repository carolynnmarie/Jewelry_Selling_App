import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular/umd';

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
    this.currentItems = this.items.query();
  }

  deleteItem(item) {
    this.items.delete(item);
  }

  openItem(item: JewelryItem) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
