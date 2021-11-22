import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { OverlayService } from 'src/app/shared/overlay.service';
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

  constructor(private walletService: WalletService, private route: ActivatedRoute, private overlayService: OverlayService) { }
  
  ngOnInit() {
    this.route.url.subscribe(() => this.init())
  }

  init() {
    this.overlayService.loading();

    const observable = forkJoin({
      wallets: this.walletService.getWallets(),
      balance: this.walletService.getBalance()
    })

    observable.subscribe({
      next: ({wallets, balance}) => {
        this.wallets = wallets;
        this.balance = balance.value;
      },
      error: err => this.overlayService.error(err),
      complete: () => this.overlayService.stopLoading()
    });
  }

  refresh(event) {
    this.init();
    event.target.complete();
  }
}
