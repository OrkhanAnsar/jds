import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import States from './states'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  _18yearsAgo = null;

  states: { text: string, value: string }[] = States;

  registerForm: FormGroup = this.fb.group({
    first_name: ['', [Validators.required]],
    last_name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    birth_date: ['', []],
    gender: ['1', [Validators.required]],
    state: ['', [Validators.required]],
    city: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    const currDate = new Date();
    currDate.setFullYear(currDate.getFullYear() - 18);
    this._18yearsAgo = currDate.toISOString();
  }

  async onSubmit() {
    this.authService.userInfo = this.registerForm.value;
    this.router.navigate(['auth/interests']);
  }

  change(e) {
    console.log(e);
    console.log('scdcd')
  }
}
