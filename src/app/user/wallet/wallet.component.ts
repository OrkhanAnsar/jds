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

  transactions: { reason: string, details: string, price: number }[] = [

  ];

  constructor(private walletService: WalletService) { }

  ngOnInit() {
    this.walletService.getWallets()
      .subscribe(
        data => this.wallets = data
      );

    this.walletService.getBalance().subscribe(data => this.balance = data.value);
  }

}
