import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Coupon, Vendor } from './coupons.model';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {

  constructor(private client: HttpClient) { }

  getAll(): Observable<Coupon[]> {
    return this.client.get<Coupon[]>(`${environment.apiBaseUrl}/coupons/`);
  }

  get(id: number): Observable<Coupon> {
    return this.client.get<Coupon>(`${environment.apiBaseUrl}/coupons/${id}/`)
  }

  getVendorInfo(id: number): Observable<Vendor> {
    return this.client.get<Vendor>(`${environment.apiBaseUrl}/vendors/${id}/`)
  }

  purchase(id: number) {
    return this.client.post(`${environment.apiBaseUrl}/coupons/${id}/purchase/`, null);
  }
}
