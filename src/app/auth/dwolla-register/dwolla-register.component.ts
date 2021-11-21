import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { OverlayService } from 'src/app/shared/overlay.service';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
declare const dwolla: any;

@Component({
  selector: 'app-dwolla-register',
  templateUrl: './dwolla-register.component.html',
  styleUrls: ['./dwolla-register.component.scss'],
})
export class DwollaRegisterComponent implements OnInit {
  iavFlag: boolean = false;

  dwollaForm: FormGroup = this.fb.group({
    address: ['', [Validators.required]],
    postal_code: [null, [Validators.required, Validators.min(10000), Validators.max(99999)]],
    ssn: [null, [Validators.required, Validators.min(1000), Validators.max(9999)]],
  })

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private sanitizer: DomSanitizer, private overlayService: OverlayService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.overlayService.loading();
    this.authService.dwollaRegistration(this.dwollaForm.value)
      .subscribe({
        next: data => {
          console.log(data);
          // this.iavFrameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://sandbox.dwolla.com/fi/token/${data.iav_token}`);
          dwolla.configure(environment.dwollaMode);
          this.iavFlag = true;
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
        },
        error: err => this.overlayService.error(),
        complete: () => this.overlayService.stopLoading()
      });
  }
}
