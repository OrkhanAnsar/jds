import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TopUpInfo, Transaction, WalletBalance, WalletInfo } from './wallet.model';

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

  getTransactions() {
    return this.client.get<Transaction[]>(`${environment.apiBaseUrl}/users/dwolla/transfers/`);
  }

  topUp(topUpInfo: TopUpInfo) {
    switch (topUpInfo.direction) {
      case '0': // Deposit
        return this.client.post(`${environment.apiBaseUrl}/users/dwolla/balance/top-up/`, { from_wallet: topUpInfo.wallet, sum: topUpInfo.sum });
      case '1': // Withdraw
        return this.client.post(`${environment.apiBaseUrl}/users/dwolla/balance/withdraw/`, { to_wallet: topUpInfo.wallet, sum: topUpInfo.sum });
    }
  }

  getIavToken() {
    return this.client.post<{ iav_token: string }>(`${environment.apiBaseUrl}/users/dwolla/wallets/iav/`, null)
  }

}
