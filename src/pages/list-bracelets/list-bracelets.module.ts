import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { ListBraceletsPage } from './list-bracelets';

@NgModule({
  declarations: [
    ListBraceletsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListBraceletsPage),
  ],
})
export class ListBraceletsPageModule {}
