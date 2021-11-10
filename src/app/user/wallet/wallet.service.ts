import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TopUpInfo, WalletBalance, WalletInfo } from './wallet.model';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private client: HttpClient) { }

  getWallets() {
    return this.client.get<WalletInfo[]>(`${environment.apiBaseUrl}/users/dwolla/wallets/`);
  }

  getBalance() {
    return this.client.get<WalletBalance>(`${environment.apiBaseUrl}/users/dwolla/balance/`);
  }

  topUp(topUpInfo: TopUpInfo) {
    return this.client.post(`${environment.apiBaseUrl}/users/dwolla/balance/top-up/`, topUpInfo);  
  }
}
