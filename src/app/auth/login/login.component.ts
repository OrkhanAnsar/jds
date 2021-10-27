import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {}

  onSubmit() {
    console.log(this.loginForm.value);
    this.authService.loginUser(this.loginForm.value).subscribe(
      data => console.log(data)
    );
  }

}
