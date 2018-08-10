import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { JewelryItem } from '../../models/jewelryItem';
import { Items } from '../../providers';
/**
 * Generated class for the ListNecklacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-necklaces',
  templateUrl: 'list-necklaces.html',
})
export class ListNecklacesPage {

  currentItems: JewelryItem[];

  constructor(public navCtrl: NavController,public items: Items, public navParams: NavParams,) {
    this.currentItems = this.items.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListNecklacesPage');
  }

  openItem(item: JewelryItem) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

}
