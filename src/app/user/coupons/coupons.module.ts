import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponsRoutingModule } from './coupons-routing.module';
import { CouponsComponent } from './coupons.component';
import { IonicModule } from '@ionic/angular';
import { CouponComponent } from './coupon/coupon.component';


@NgModule({
  declarations: [
    CouponsComponent,
    CouponComponent
  ],
  imports: [
    CommonModule,
    CouponsRoutingModule,
    IonicModule
  ]
})
export class CouponsModule { }
