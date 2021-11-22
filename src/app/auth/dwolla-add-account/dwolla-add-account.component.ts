import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OverlayService } from 'src/app/shared/overlay.service';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
declare const dwolla: any;

@Component({
  selector: 'app-dwolla-add-account',
  templateUrl: './dwolla-add-account.component.html',
  styleUrls: ['./dwolla-add-account.component.scss'],
})
export class DwollaAddAccountComponent implements OnInit {
  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router, private overlayService: OverlayService) { }

  ngOnInit() {
    this.init();
  }
  
  init() {
    this.overlayService.loading();

    this.authService.getIavToken()
      .subscribe({
        next: data => {
          dwolla.configure(environment.dwollaMode);
      
          dwolla.iav.start(
            data.iav_token,
            {
              container: 'iavContainer',
              stylesheets: [
                'https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext'
              ],
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
              this.router.navigate(['/user/profile']);
            }
          );
        }
      })

  }
}
