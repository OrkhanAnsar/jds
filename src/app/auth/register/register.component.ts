import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    birthDate: ['', [Validators.required]],
    gender: ['1', [Validators.required]],
    state: ['', [Validators.required]],
    city: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() { }

  async onSubmit() {
    // this.authService.registerUser(this.registerForm.value);
    console.log(this.registerForm.value);
  }
}
