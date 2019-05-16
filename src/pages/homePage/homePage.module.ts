import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular/umd';

import { HomePage } from './homePage';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    TranslateModule.forChild()
  ],
  exports: [
    HomePage
  ]
})
export class ContentPageModule { }
