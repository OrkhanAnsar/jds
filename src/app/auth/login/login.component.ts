import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OverlayService } from 'src/app/shared/overlay.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', Validators.required]
  })

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private overlayService: OverlayService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.overlayService.loading();
    this.authService.loginUser(this.loginForm.value)
      .subscribe({
        next: () => this.router.navigate(['user']),
        error: () => this.overlayService.error(),
        complete: () => this.overlayService.stopLoading()
      });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
