import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OverlayService } from 'src/app/shared/overlay.service';
import { environment } from 'src/environments/environment';
import { WalletService } from '../wallet.service';
declare const dwolla: any;

@Component({
  selector: 'app-add-wallet',
  templateUrl: './add-wallet.component.html',
  styleUrls: ['./add-wallet.component.scss'],
})
export class AddWalletComponent implements OnInit {

  constructor(private overlayService: OverlayService, private walletService: WalletService, private router: Router) { }

  ngOnInit() {
    this.overlayService.loading();
    this.walletService.getIavToken().subscribe({
      next: data => {
        console.log(data);
        dwolla.configure(environment.dwollaMode);
        dwolla.iav.start(
          data.iav_token,
          {
            container: 'iavContainer',
            stylesheets: [
              'https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext'
            ],
            microDeposits: true,
            fallbackToMicroDeposits: true,
            subscriber: (state) => {
              if (state.error) {
                this.overlayService.error(state.error.message)
              } else if (state.currentPage === 'BankSearch') {
                this.overlayService.stopLoading();
              }
            },
          },
          (err, res) => {
            if (err) {
              this.overlayService.error(err.message);
            }
            this.router.navigate(['/user/wallet']);
          }
        );

      },
      error: err => {
        this.overlayService.error();
        this.router.navigate(['/user/wallet']);
      }
    })



  }

}