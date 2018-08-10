import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JewelryItem } from '../../models/jewelryItem';
import { Items } from '../../providers';
/**
 * Generated class for the ListBraceletsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-bracelets',
  templateUrl: 'list-bracelets.html',
})
export class ListBraceletsPage {
  currentItems: JewelryItem[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public items: Items) {
    this.currentItems = this.items.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListBraceletsPage');
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
