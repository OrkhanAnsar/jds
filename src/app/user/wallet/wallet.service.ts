import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WalletBalance, WalletInfo } from './wallet.model';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private client: HttpClient) { }

  getWallet() {
    return this.client.get<WalletInfo[]>(`${environment.apiBaseUrl}/users/dwolla/wallets`);
  }

  getBalance() {
    return this.client.get<WalletBalance>(`${environment.apiBaseUrl}/users/dwolla/balance/`);
  }
}
