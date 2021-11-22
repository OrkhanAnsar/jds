import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { OverlayService } from 'src/app/shared/overlay.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dwolla-register',
  templateUrl: './dwolla-register.component.html',
  styleUrls: ['./dwolla-register.component.scss'],
})
export class DwollaRegisterComponent implements OnInit {
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
        next: () => this.router.navigate(['auth/dwolla-add-account']),
        error: err => this.overlayService.error(err),
        complete: () => this.overlayService.stopLoading()
      })
  }
}
