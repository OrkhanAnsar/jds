import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { OverlayService } from 'src/app/shared/overlay.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss'],
})
export class InterestsComponent implements OnInit {

  interests: { text: string, value: number }[] = [];

  interestsForm: FormGroup = this.fb.group({
    interest1: ['', Validators.required],
    interest2: [''],
    interest3: [''],
    about: [''],
    acceptance: [false, [Validators.requiredTrue]]
  })

  constructor(private fb: FormBuilder, private authService: AuthService, private overlayService: OverlayService, private router: Router) { }

  ngOnInit() {
    this.overlayService.loading();
    this.authService.getInterests()
      .pipe(
        map(interestsObj => {
          return Object.keys(interestsObj)
            .map(key => ({ text: key, value: interestsObj[key] }));
        })
      )
      .subscribe({
        next: data => this.interests = data,
        error: err => this.overlayService.error(),
        complete: () => this.overlayService.stopLoading()
      });
  }

  onSubmit() {
    this.overlayService.loading();

    this.authService.userInterests = this.interestsForm.value;

    this.authService.registerUser()
      .subscribe({
        next: data => this.router.navigate(['auth/dwolla-registration']),
        error: err => this.overlayService.error(),
        complete: () => this.overlayService.stopLoading()
      });
  }
}
