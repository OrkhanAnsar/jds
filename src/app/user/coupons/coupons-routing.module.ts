import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponComponent } from './coupon/coupon.component';
import { CouponsComponent } from './coupons.component';
import { PurchaseInfoComponent } from './purchase-info/purchase-info.component';

const routes: Routes = [
  {
    path: '',
    component: CouponsComponent
  },
  {
    path: 'coupon/:id',
    component: CouponComponent
  },
  {
    path: 'purchase-info/:id',
    component: PurchaseInfoComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponsRoutingModule { }
