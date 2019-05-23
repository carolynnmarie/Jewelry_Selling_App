import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JewelryItem } from '../../models/jewelryItem';
import { Items } from '../../providers';
import { BraceletsApi } from '../../providers/bracelets/BraceletsApi';
import { BraceletItem } from '../../models/BraceletItem';
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

  currentItems: BraceletItem[];
  bItems: BraceletItem[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public braceletApi: BraceletsApi) {
    this.currentItems = this.braceletApi.query();
    this.bItems = new JewelryItem[this.currentItems.length-1];
  }

  ionViewDidLoad() {
    let i : number = 0; 
    this.currentItems.forEach(element => {
      if(element.type == "bracelet"){
        this.bItems[i] = element;    
        i++;
      }         
    });
    let braceletItems = new JewelryItem[i]; i=0;
    this.bItems.forEach(element => {
      braceletItems[i] = element;
      i++;
    })
    this.bItems = braceletItems;
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
