import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListEarringsPage } from './list-earrings';

@NgModule({
  declarations: [
    ListEarringsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListEarringsPage),
  ],
})
export class ListEarringsPageModule {}
