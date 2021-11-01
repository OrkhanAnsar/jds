import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { LoginInfo, RegisterInfo, AuthResponse, RegisterVendorInfo } from './auth.model';
import { StorageService } from '../shared/storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private client: HttpClient, private storageService: StorageService, private router: Router) {
  }

  loginUser(loginInfo: LoginInfo) {
    this.client.post<AuthResponse>(`${environment.apiBaseUrl}/auth-user/`, loginInfo)
      .subscribe(
        data => {
          this.storageService.set('auth', {...data, userType: 'user'})
          this.router.navigate(['user']);
        },
        err => console.log(err)
      )
  }

  registerUser(registerInfo: RegisterInfo) {
    const registerModel = {
      first_name: registerInfo.firstName,
      last_name: registerInfo.lastName,
      email: registerInfo.email,
      username: registerInfo.username,
      password: registerInfo.password,
      birth_date: registerInfo.birthDate,
      gender: registerInfo.gender,
      state: registerInfo.state,
      city: registerInfo.city
    };

    console.log(registerModel);

    this.client.post<AuthResponse>(`${environment.apiBaseUrl}/register-user/`, registerModel)
      .subscribe(
        data => {
          this.storageService.set('auth', {...data, userType: 'user'})
          this.router.navigate(['user/profile'])
        },
        err => console.log(err)
      );
  }

  loginVendor(loginInfo: LoginInfo) {
    this.client.post<AuthResponse>(`${environment.apiBaseUrl}/auth-vendor/`, loginInfo)
      .subscribe(
        data => {
          this.storageService.set('auth', {...data, userType: 'vendor'})
          this.router.navigate(['vendor']);
        },
        err => console.log(err)
      )
  }

  registerVendor(registerInfo: RegisterVendorInfo) {
    const registerModel = {
      name: registerInfo.name,
      state: registerInfo.state,
      email: registerInfo.email,
      username: registerInfo.username,
      password: registerInfo.password,
      address: registerInfo.address,
      postal_code: registerInfo.postalCode,
      city: registerInfo.city
    };

    this.client.post<AuthResponse>(`${environment.apiBaseUrl}/register-vendor/`, registerModel)
      .subscribe(
        data => {
          this.storageService.set('auth', {...data, userType: 'vendor'})
          this.router.navigate(['vendor'])
        },
        err => console.log(err)
      );
  }
}
