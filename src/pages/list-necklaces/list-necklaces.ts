import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { JewelryItem } from '../../models/jewelryItem';
import { Items } from '../../providers';


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
    this.jItems = this.currentItems;
  }

  ionViewDidLoad() {
    let i : number = 0; 
    this.currentItems.forEach(element => {
      if(element.type == "necklace"){
        this.jItems[i] = element;    
        i++;
      }         
    });
    this.jItems = this.jItems.slice(0,i);
    i = 0;
  }

  openItem(item: JewelryItem) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

}
