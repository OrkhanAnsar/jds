import { Component, OnInit } from '@angular/core';
import { WalletInfo } from './wallet.model';
import { WalletService } from './wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent implements OnInit {

  wallets: WalletInfo[] = [];
  balance: string = '---';

  transactions: { reason: string, details: string, price: number } [] = [
    {
      reason: 'C&C Bellisimo',
      details: 'Coupon with 20% discount - dinner for two',
      price: -56
    },
    {
      reason: 'Balance Top Up',
      details: 'Transaction from VISA card **** **** **** 0000',
      price: +300
    },
    {
      reason: 'C&C Bellisimo',
      details: 'Coupon with 20% discount - dinner for two',
      price: -56
    },
    
  ];

  constructor(private walletService: WalletService) { }

  ngOnInit() {
    this.walletService.getWallet()
      .subscribe(
        data => this.wallets = data
      );

        this.walletService.getBalance().subscribe(data => this.balance = data.value);
  }

}
