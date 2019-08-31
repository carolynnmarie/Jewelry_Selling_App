import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { JewelryItem } from '../../models/jewelryItem';
import { Items } from '../../mocks/providers/items';
/**
 * Generated class for the ListEarringsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-earrings',
  templateUrl: 'list-earrings.html',
})
export class ListEarringsPage {
  
  currentItems: JewelryItem[];
  eItems: JewelryItem[];


  constructor(public navCtrl: NavController, public navParams: NavParams,public items: Items) {
    this.currentItems = this.items.query();
    this.eItems = [];
  }

  ionViewDidLoad() {
    this.currentItems = this.items.query();
    this.currentItems.forEach(element => {
      if(element.type == "earrings"){
        this.eItems.push(element);
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

  backToHome(){
    this.navCtrl.setRoot('HomePage');
  }
}
