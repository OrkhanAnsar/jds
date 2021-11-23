import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Coupon, CouponDetails, PurchasedCoupon } from './coupons.model';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {

  constructor(private client: HttpClient) { }

  getAll(): Observable<Coupon[]> {
    return this.client.get<Coupon[]>(`${environment.apiBaseUrl}/coupons/`);
  }

  get(id: number): Observable<CouponDetails> {
    return this.client.get<CouponDetails>(`${environment.apiBaseUrl}/coupons/${id}/`)
  }

  purchase(id: number) {
    return this.client.post(`${environment.apiBaseUrl}/coupons/${id}/purchase/`, null);
  }

  getPurchased(id: number) {
    return this.client.get<PurchasedCoupon>(`${environment.apiBaseUrl}/coupons/purchased/${id}/`);
  }
}
