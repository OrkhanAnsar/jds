import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Coupon } from './coupons.model';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {

  constructor(private client: HttpClient) { }

  getAll(): Observable<Coupon[]> {
    return this.client.get<Coupon[]>(`${environment.apiBaseUrl}/coupons`);
  }
}
