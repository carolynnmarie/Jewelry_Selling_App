import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { CheckoutPage } from './checkout';

@NgModule({
  declarations: [
    CheckoutPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckoutPage),
  ],
})
export class CheckoutPageModule {}
