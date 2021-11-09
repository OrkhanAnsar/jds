import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/shared/loading.service';
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

  constructor(private fb: FormBuilder, private authService: AuthService, private loadingService: LoadingService, private router: Router) { }

  ngOnInit() {
    this.loadingService.present();
    this.authService.getInterests()
      .pipe(
        map(interestsObj => {
          return Object.keys(interestsObj)
            .map(key => ({ text: key, value: interestsObj[key] }));
        })
      )
      .subscribe(data => {
        this.interests = data;
        this.loadingService.stop()
      });
  }

  onSubmit() {
    this.loadingService.present();

    this.authService.userInterests = this.interestsForm.value;

    this.authService.registerUser()
      .subscribe(data => {
        this.loadingService.stop();
        this.router.navigate(['user/profile']);
      });
  }
}
