import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform, MenuController } from 'ionic-angular';

import { Settings } from '../providers/settings/settings';
//import { MenuPage } from '../pages/menu/menu';
import { FirstRunPage } from '../pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
   @ViewChild(Nav) nav: Nav;

  rootPage = FirstRunPage;
  pages: Array<{title: string, component: any}>;

  constructor(private translate: TranslateService, public platform: Platform,settings: Settings,
    public menu: MenuController,private config: Config, public statusBar: StatusBar, 
    public splashScreen: SplashScreen) {

      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.pages = [
      { title: 'Welcome', component: 'WelcomePage' },
      { title: 'Tabs', component: 'TabsPage' },
      { title: 'Cards', component: 'CardsPage' },
      { title: 'All Jewelry', component: 'ListMasterPage' },
      { title: 'Necklaces', component: 'ListNecklacesPage' },
      { title: 'Bracelets', component: 'ListBraceletsPage'},
      { title: 'Earrings', component: 'ListEarringPage'},
      { title: 'Menu', component: 'MenuPage' },
      { title: 'Search', component: 'SearchPage' },
      { title: 'Cart', component: 'CartPage'},
      { title: 'Checkout', component: 'CheckoutPage'},
      { title: 'Item Detail', component: 'ItemDetailPage'}
    ]
    this.initTranslate();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
