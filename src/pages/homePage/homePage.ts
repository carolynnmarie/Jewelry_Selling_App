import { Component} from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

interface PageItem {
  title: string
  component: any
}
type PageList = PageItem[]

@IonicPage()
@Component({
  selector: 'page-homePage',
  templateUrl: 'homePage.html'
})
export class HomePage {

  pages: PageList;

  constructor(public navCtrl: NavController) {
    this.pages = [
      { title: 'SearchPage',component:'SearchPage'},
      { title: 'All Jewelry',  component: 'ListMasterPage'},
      { title: 'Necklaces', component: 'ListNecklacesPage'},
      { title: 'Bracelets', component: 'ListNecklacesPage'},
      { title: 'Earrings', component: 'ListEarringsPage'}
    ];
   }
   openPage(page: PageItem) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(page.component);
  }

}
