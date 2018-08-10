import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { CartPage } from './cart';

@NgModule({
  declarations: [
    CartPage,
  ],
  imports: [
    IonicPageModule.forChild(CartPage),
  ],
})
export class CartPageModule {}
