import { Pipe, PipeTransform } from '@angular/core';
import { PurchasedCoupon } from '../user/coupons/coupons.model';

@Pipe({
  name: 'couponState'
})
export class CouponStatePipe implements PipeTransform {

  transform(coupon: PurchasedCoupon): string {
    return coupon.redeemed_at ? 'Used' : (coupon.redeemed_now ? 'Pending' : 'Active');
  }

}
