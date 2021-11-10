import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dwolla-register',
  templateUrl: './dwolla-register.component.html',
  styleUrls: ['./dwolla-register.component.scss'],
})
export class DwollaRegisterComponent implements OnInit {
  iavFrameUrl: SafeResourceUrl;

  dwollaForm: FormGroup = this.fb.group({
    address: ['', [Validators.required]],
    postal_code: [null, [Validators.required, Validators.min(10000), Validators.max(99999)]],
    ssn: [null, [Validators.required, Validators.min(1000), Validators.max(9999)]],
  })

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.dwollaRegistration(this.dwollaForm.value)
      .subscribe(data => {
        console.log(data);
        this.iavFrameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://sandbox.dwolla.com/fi/token/${data.iav_token}`);
      });
  }
}
