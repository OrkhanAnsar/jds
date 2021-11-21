import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { OverlayService } from 'src/app/shared/overlay.service';
import { Coupon } from '../coupons.model';
import { CouponsService } from '../coupons.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss'],
})
export class CouponComponent implements OnInit {

  coupon: Coupon;

  constructor(private route: ActivatedRoute, private couponsService: CouponsService, private overlayService: OverlayService) { }


  ngOnInit() {

    this.overlayService.loading();
    this.route.params
      .pipe(
        switchMap(data => this.couponsService.get(data.id))
      )
      .subscribe({
        next: data => this.coupon = data,
        error: err => this.overlayService.error(),
        complete: () => this.overlayService.stopLoading()
      });





  }

}
