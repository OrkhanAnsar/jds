import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OverlayService } from 'src/app/shared/overlay.service';
import { CouponDetails } from '../coupons.model';
import { CouponsService } from '../coupons.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss'],
})
export class CouponComponent implements OnInit {
  id;
  coupon: CouponDetails;

  constructor(private route: ActivatedRoute, private router: Router, private couponsService: CouponsService, private overlayService: OverlayService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.init();
  }

  init() {
    this.overlayService.loading();

    this.couponsService.get(this.id)
      .subscribe({
        next: data => this.coupon = data,
        error: err => this.overlayService.error(err),
        complete: () => this.overlayService.stopLoading()
      });
  }

  refresh(event) {
    this.init();
    event.target.complete();
  }

  purchase() {
    this.overlayService.loading();

    this.couponsService.purchase(this.id)
      .subscribe({
        next: data => this.router.navigate(['user/coupons/purchase-info', data.id]),
        error: err => this.overlayService.error(err),
        complete: () => this.overlayService.stopLoading()
      });
  }
}
