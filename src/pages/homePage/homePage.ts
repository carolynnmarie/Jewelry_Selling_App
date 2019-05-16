import { Component} from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular/umd';

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
      //{ title: 'SearchPage',component:'SearchPage'},
      { title: 'All Jewelry',  component: 'ListMasterPage'},
      { title: 'Necklaces', component: 'ListNecklacesPage'},
      { title: 'Bracelets', component: 'ListBraceletsPage'},
      { title: 'Earrings', component: 'ListEarringsPage'}
    ];
        
   }

   ionViewDidLoad() {
    
   }
   
   openPage(page: PageItem) {
    this.navCtrl.push(page.component);
  }

}
