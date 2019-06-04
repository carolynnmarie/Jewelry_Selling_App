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
    this.bItems = this.currentItems;
  }

  ionViewDidLoad() {
    let i : number = 0; 
    this.currentItems.forEach(element => {
      if(element.type == "bracelet"){
        this.bItems[i] = element;    
        i++;
      }         
    });
    this.bItems = this.bItems.slice(0,i);
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
