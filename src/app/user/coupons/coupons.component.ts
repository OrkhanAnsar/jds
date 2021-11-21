import { Component, OnInit } from '@angular/core';
import { OverlayService } from 'src/app/shared/overlay.service';
import { Coupon } from './coupons.model';
import { CouponsService } from './coupons.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss'],
})
export class CouponsComponent implements OnInit {
  coupons: Coupon[] = [];

  constructor(private couponsService: CouponsService, private overlayService: OverlayService) { }

  ngOnInit() {
    this.overlayService.loading();
    this.couponsService.getAll()
      .subscribe({
        next: data => this.coupons = data,
        error: err => this.overlayService.error(),
        complete: () => this.overlayService.stopLoading()
      });
  }

}
