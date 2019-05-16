import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { ListNecklacesPage } from './list-necklaces';

@NgModule({
  declarations: [
    ListNecklacesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListNecklacesPage),
  ],
})
export class ListNecklacesPageModule {}
