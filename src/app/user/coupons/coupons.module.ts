import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponsRoutingModule } from './coupons-routing.module';
import { CouponsComponent } from './coupons.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    CouponsComponent
  ],
  imports: [
    CommonModule,
    CouponsRoutingModule,
    IonicModule
  ]
})
export class CouponsModule { }
