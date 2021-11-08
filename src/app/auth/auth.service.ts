import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { LoginInfo, RegisterInfo, AuthResponse, RegisterVendorInfo, InterestsInfo } from './auth.model';
import { StorageService } from '../shared/storage.service';
import { Router } from '@angular/router';
import { LoadingService } from '../shared/loading.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userInfo: RegisterInfo;
  private _interestsInfo: InterestsInfo;

  constructor(
    private client: HttpClient, 
    private storageService: StorageService, 
    private router: Router,
    private loadingService: LoadingService) {
  }

  loginUser(loginInfo: LoginInfo) {
    this.client.post<AuthResponse>(`${environment.apiBaseUrl}/auth-user/`, loginInfo)
      .subscribe(
        data => {
          this.storageService.set('auth', { ...data, userType: 'user' })
          this.router.navigate(['user']);
        },
        err => console.log(err)
      )
  }

  set userInfo(registerInfo: RegisterInfo) {
    registerInfo = { ...registerInfo, birth_date: new Date(registerInfo.birth_date).toISOString().slice(0, 10) };
    this._userInfo = registerInfo;
  }

  set userInterests(interestsInfo: InterestsInfo) {
    this._interestsInfo = interestsInfo;
  }

  async registerUser() {
    try {
      this.loadingService.present();
      // const registerData = await this.client.post<AuthResponse>(`${environment.apiBaseUrl}/register-user/`, this._userInfo).toPromise();
      // this.storageService.set('auth', { ...registerData, userType: 'user' })

      // this.router.navigate(['auth/dwolla']);
      
      setTimeout(() => {
        console.log(this._userInfo);
        console.log(this._interestsInfo);
        this.loadingService.stop();
      }, 5000);
      // this.loadingService.stop();
    } catch (error) {
      console.log(error);
    }
  }

  loginVendor(loginInfo: LoginInfo) {
    this.client.post<AuthResponse>(`${environment.apiBaseUrl}/auth-vendor/`, loginInfo)
      .subscribe(
        data => {
          this.storageService.set('auth', { ...data, userType: 'vendor' })
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
          this.storageService.set('auth', { ...data, userType: 'vendor' })
          this.router.navigate(['vendor'])
        },
        err => console.log(err)
      );
  }
}
