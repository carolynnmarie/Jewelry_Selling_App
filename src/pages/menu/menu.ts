import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController } from 'ionic-angular';

interface PageItem {
  title: string
  component: any
  name: string
}
type PageList = PageItem[]

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  // A reference to the ion-nav in our component
  @ViewChild(Nav) nav: Nav;


  pages: PageList;

  constructor(public navCtrl: NavController) {
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'ListMasterPage',  component: 'list-master' , name: 'All Jewelry'},
      { title: 'ListNecklacesPage', component: 'list-necklaces' , name: 'Necklaces'},
      { title: 'ListBraceletsPage', component: 'list-bracelets', name: 'Bracelets'},
      { title: 'ListEarringsPage', component: 'list-earrings', name: 'Earrings'}
    ];
  }

  ionViewDidLoad() {
    console.log('Hello MenuPage Page');
  }

  openPage(page: PageItem) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
