import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss'],
})
export class InterestsComponent implements OnInit {

  interestsForm: FormGroup = this.fb.group({
    interest1: ['', Validators.required],
    interest2: [''],
    interest3: [''],
    about: [''],
    acceptance: [false, [Validators.requiredTrue]]
  })

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {}

  onSubmit() {
    this.authService.userInterests = this.interestsForm.value;
    this.authService.registerUser();
  }
}
