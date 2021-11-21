import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OverlayService } from 'src/app/shared/overlay.service';
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
    sum: [null, [Validators.required, Validators.min(1)]],
  })

  public wallets: WalletInfo[] = []

  constructor(private fb: FormBuilder, private walletService: WalletService, private overlayService: OverlayService, private router: Router) { }

  ngOnInit() {
    this.overlayService.loading();
    this.walletService.getWallets()
      .subscribe({
        next: data => {
          this.wallets = data;
        },
        error: err => this.overlayService.error(),
        complete: () => {
          this.overlayService.stopLoading();
        }
      });
  }

  onSubmit() {
    this.overlayService.loading();
    this.walletService.topUp(this.transactionForm.value)
      .subscribe({
        next: _ => this.router.navigate(['/user/wallet']),
        error: () => this.overlayService.error(),
        complete: () => this.overlayService.stopLoading()
      });
  }
}
