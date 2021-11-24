/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { OverlayService } from 'src/app/shared/overlay.service';
import States from './../../auth/register/states';
import { UserInfo } from '../user.model';
import { UserService } from './../user.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})


export class EditProfileComponent implements OnInit {

  isEditProfileLoaded = false;
  userInfo: UserInfo;

  updateForm: FormGroup;
  first_name: FormControl;
  last_name: FormControl;
  user: FormControl;
  email: FormControl;
  birth_date: FormControl;
  gender: FormControl;
  state: FormControl;
  city: FormControl;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    //private overlayService: OverlayService
    ) { }

  ngOnInit() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.userService.getUser().then((result) => {
        this.userInfo = {
            first_name: result.first_name,
            last_name: result.last_name,
            email: result.email,
            user: result.user,
            interests: result.interests,
            bio: result.bio,
            photos: result.photos,
            phone: result.phone,
            soc_links: result.soc_links,
            birth_date: result.birth_date,
            gender: result.gender,
            state: result.state,
            city: result.city
        };
        this.createFormGroup();
        this.isEditProfileLoaded = true;
    });
}


createFormGroup() {
  this.first_name = new FormControl(this.userInfo.first_name, [Validators.required]);
  this.last_name = new FormControl(this.userInfo.last_name, [Validators.required]);
  this.email = new FormControl(this.userInfo.email, [Validators.required, Validators.email]); 
  this.user = new FormControl(this.userInfo.user, [Validators.required]);
  this.birth_date = new FormControl(this.userInfo.birth_date, [Validators.required]);
  this.gender = new FormControl(this.userInfo.gender);
  this.city = new FormControl(this.userInfo.city, [Validators.required]);
  this.state = new FormControl(this.userInfo.state, [Validators.required]);

  this.updateForm = this.fb.group({
    first_name: this.first_name,
    last_name: this.last_name,
    email: this.email,
    user: this.user,
    birth_date: this.birth_date,
    gender: this.gender,
    city: this.city,
    state: this.state
});
}

  onSubmit() {
    //this.overlayService.loading();
    this.userService.updateUser(this.updateForm.value)
      .subscribe({
        next: () => this.loadUserProfile(),
        //error: () => this.overlayService.error(),
        //complete: () => this.overlayService.stopLoading()
      },
      );
  }
}
