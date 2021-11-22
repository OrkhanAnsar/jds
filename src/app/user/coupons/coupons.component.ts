import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private couponsService: CouponsService, private overlayService: OverlayService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe(() => this.init())
  }

  init() {
    this.overlayService.loading();
    this.couponsService.getAll()
      .subscribe({
        next: data => this.coupons = data,
        error: err => this.overlayService.error(err),
        complete: () => this.overlayService.stopLoading()
      });
  }

  refresh(event) {
    this.init();
    event.target.complete()
  }
}
