import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponsRoutingModule } from './coupons-routing.module';
import { CouponsComponent } from './coupons.component';
import { IonicModule } from '@ionic/angular';
import { CouponComponent } from './coupon/coupon.component';
import { PurchaseInfoComponent } from './purchase-info/purchase-info.component';


@NgModule({
  declarations: [
    CouponsComponent,
    CouponComponent,
    PurchaseInfoComponent
  ],
  imports: [
    CommonModule,
    CouponsRoutingModule,
    IonicModule
  ]
})
export class CouponsModule { }
