import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { OverlayService } from 'src/app/shared/overlay.service';
import { Coupon, Vendor } from '../coupons.model';
import { CouponsService } from '../coupons.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss'],
})
export class CouponComponent implements OnInit {
  id;
  coupon: Coupon;
  vendor: Vendor;

  constructor(private route: ActivatedRoute, private router: Router, private couponsService: CouponsService, private overlayService: OverlayService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.init();
  }

  init() {
    this.overlayService.loading();

    this.couponsService.get(this.id)
      .pipe(
        tap(coupon => this.coupon = coupon),
        switchMap(coupon => this.couponsService.getVendorInfo(coupon.vendor))
      )
      .subscribe({
        next: data => this.vendor = data,
        error: err => this.overlayService.error(err),
        complete: () => this.overlayService.stopLoading()
      });
  }

  refresh(event) {
    this.init();
    event.target.complete();
  }

  buy() {
    this.overlayService.loading();

    this.couponsService.purchase(this.id)
      .subscribe({
        next: () => this.router.navigate(['user/coupons/purchase-info']),
        error: err => this.overlayService.error(err),
        complete: () => this.overlayService.stopLoading()
      });
  }
}
