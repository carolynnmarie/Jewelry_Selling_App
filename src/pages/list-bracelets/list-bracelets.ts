import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JewelryItem } from '../../models/jewelryItem';
import { Items } from '../../mocks/providers/items';
// import { BraceletsApi } from '../../providers/bracelets/BraceletsApi';
// import { BraceletItem } from '../../models/BraceletItem';
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
  bItems: JewelryItem[];


  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items) {
    this.currentItems = this.items.query();
    this.bItems = [];
  }

  ionViewDidLoad() {
    this.currentItems = this.items.query();
    this.currentItems.forEach(element => {
      if(element.type == "bracelet"){
        this.bItems.push(element);
      }         
    });

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
