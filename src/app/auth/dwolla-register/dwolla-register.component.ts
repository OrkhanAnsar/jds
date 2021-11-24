import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { OverlayService } from 'src/app/shared/overlay.service';
import { AuthService } from '../auth.service';
import States from '../states.js';

@Component({
  selector: 'app-dwolla-register',
  templateUrl: './dwolla-register.component.html',
  styleUrls: ['./dwolla-register.component.scss'],
})
export class DwollaRegisterComponent implements OnInit {
  states: { text: string, value: string }[] = States;

  dwollaForm: FormGroup = this.fb.group({
    state: ['', [Validators.required]],
    city: ['', [Validators.required]],
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

  get state() {
    return this.dwollaForm.get('state');
  }

  get city() {
    return this.dwollaForm.get('city');
  }

  get address() {
    return this.dwollaForm.get('address');
  }

  get postalCode() {
    return this.dwollaForm.get('postal_code');
  }

  get ssn() {
    return this.dwollaForm.get('ssn');
  }
}
