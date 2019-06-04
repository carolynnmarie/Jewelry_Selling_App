import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



interface PageItem {
  title: string
  component: any
  name: string
}
//type PageList = PageItem[]

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  rootPage: any = 'ContentPage';
  pages: PageItem[];

  constructor(public navCtrl: NavController,public navParams: NavParams) {
    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'SearchPage',component:'search',name: 'Search All Jewelry'},
      { title: 'ListMasterPage',  component: 'list-master' , name: 'Browse All Jewelry'},
      { title: 'ListNecklacesPage', component: 'list-necklaces' , name: 'Browse Necklaces'},
      { title: 'ListBraceletsPage', component: 'list-bracelets', name: 'Browse Bracelets'},
      { title: 'ListEarringsPage', component: 'list-earrings', name: 'Browse Earrings'}
    ];
  }

  ionViewDidLoad() {
    console.log('Hello MenuPage Page');
  }

  openPage(page: PageItem) {
    this.navCtrl.push(page.component);
    
  }
}
