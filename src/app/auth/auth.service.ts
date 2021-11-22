import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { LoginInfo, RegisterInfo, AuthResponse, InterestsInfo, DwollaRegistrationInfo } from './auth.model';
import { StorageService } from '../shared/storage.service';
import { Router } from '@angular/router';

import { delay, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private client: HttpClient,
    private storageService: StorageService,
    private router: Router) {
  }

  loginUser(loginInfo: LoginInfo) {
    return this.client.post<AuthResponse>(`${environment.apiBaseUrl}/auth-user/`, loginInfo)
      .pipe(
        tap(value => this.storageService.set('auth', { ...value, userType: 'user' }))
      );
  }

  registerUser(registerInfo: RegisterInfo) {
    registerInfo = { ...registerInfo, birth_date: new Date(registerInfo.birth_date).toISOString().slice(0, 10) };

    return this.client.post<AuthResponse>(`${environment.apiBaseUrl}/register-user/`, registerInfo)
      .pipe(
        tap(res => this.storageService.set('auth', { ...res, userType: 'user' }))
      );
  }

  async applyInterests(interestsInfo: InterestsInfo) {
    const id = (await this.storageService.get('auth')).id;

    const interests = [];
    Object.keys(interestsInfo).forEach(key => {
      if ((key as string).startsWith('interest') && interestsInfo[key]) {
        interests.push(interestsInfo[key]);
      }
    })
    return this.client.post(`${environment.apiBaseUrl}/users/${id}/`, { interests: interests, bio: interestsInfo.about });
  }

  // set userInfo(registerInfo: RegisterInfo) {
  //   registerInfo = { ...registerInfo, birth_date: new Date(registerInfo.birth_date).toISOString().slice(0, 10) };
  //   this._userInfo = registerInfo;
  // }

  // set userInterests(interestsInfo: InterestsInfo) {
  //   this._interestsInfo = interestsInfo;
  // }

  // registerUser() {
  //   return this.client.post<AuthResponse>(`${environment.apiBaseUrl}/register-user/`, this._userInfo)
  //     .pipe(
  //       tap(value => this.storageService.set('auth', { ...value, userType: 'user' })),
  //       delay(1000),
  //       switchMap(value => {
  //         const id = value.id;
  //         const interests = [];
  //         Object.keys(this._interestsInfo).forEach(key => {
  //           if ((key as string).startsWith('interest') && this._interestsInfo[key]) {
  //             interests.push(this._interestsInfo[key]);
  //           }
  //         })
  //         console.log(interests);
  //         return this.client.post(`${environment.apiBaseUrl}/users/${id}/`, { interests: interests, bio: this._interestsInfo.about });
  //       }),
  //       delay(1000)
  //     )
  // }

  getInterests() {
    return this.client.get(`${environment.apiBaseUrl}/interests/`);
  }

  dwollaRegistration(dwollaRegistrationInfo: DwollaRegistrationInfo) {
    return this.client.post(`${environment.apiBaseUrl}/users/dwolla/register/`, dwollaRegistrationInfo);
  }

  getIavToken(): Observable<{ iav_token: string; }> {
    return this.client.post<{ iav_token: string }>(`${environment.apiBaseUrl}/users/dwolla/wallets/iav/`, null);
  }
}
