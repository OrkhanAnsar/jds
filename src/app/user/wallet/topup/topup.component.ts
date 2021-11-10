import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/shared/loading.service';
import { WalletInfo } from '../wallet.model';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.component.html',
  styleUrls: ['./topup.component.scss'],
})
export class TopupComponent implements OnInit {

  transactionForm: FormGroup = this.fb.group({
    from_wallet: ['', [Validators.required]],
    sum: [null, [Validators.required, Validators.min(0)]],
  })

  public wallets: WalletInfo[] = []

  constructor(private fb: FormBuilder, private walletService: WalletService, private loadingService: LoadingService, private router: Router) { }

  ngOnInit() {
    this.loadingService.present();
    this.walletService.getWallets()
      .subscribe({
        next: data => {
          this.wallets = data;
        },
        complete: () => {
          this.loadingService.stop();
        }
      });
  }

  onSubmit() {
    this.walletService.topUp(this.transactionForm.value)
      .subscribe({
        next: _ => this.router.navigate(['/user/wallet']),
        complete: () => this.loadingService.stop()
      });
  }
}
