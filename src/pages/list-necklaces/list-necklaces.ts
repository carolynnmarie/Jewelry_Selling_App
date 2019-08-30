import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { JewelryItem } from '../../models/jewelryItem';
import { Items } from '../../mocks/providers/items';


@IonicPage()
@Component({
  selector: 'page-list-necklaces',
  templateUrl: 'list-necklaces.html',
})
export class ListNecklacesPage {

  currentItems: JewelryItem[];
  jItems: JewelryItem[];

  constructor(public navCtrl: NavController,public items: Items, public navParams: NavParams,) {
    this.currentItems= this.items.query();
    this.jItems = [];
  }

  ionViewDidLoad() {
    this.currentItems.forEach(element => {
      if(element.type == "necklace"){
        this.jItems.push(element);
      }         
    });
  }

  openItem(item: JewelryItem) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

}
