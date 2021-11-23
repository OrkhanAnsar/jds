import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OverlayService } from 'src/app/shared/overlay.service';
import { PurchasedCoupon } from '../coupons.model';
import { CouponsService } from '../coupons.service';

@Component({
  selector: 'app-purchase-info',
  templateUrl: './purchase-info.component.html',
  styleUrls: ['./purchase-info.component.scss'],
})
export class PurchaseInfoComponent implements OnInit {

  id;
  coupon: PurchasedCoupon

  constructor(private route: ActivatedRoute, private overlayService: OverlayService, private couponsService: CouponsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.init();
  }

  init() {
    this.overlayService.loading();

    this.couponsService.getPurchased(this.id)
      .subscribe({
        next: coupon => this.coupon = coupon,
        error: err => this.overlayService.error(err),
        complete: () => this.overlayService.stopLoading()
      });
  }

}
