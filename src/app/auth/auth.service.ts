import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { LoginInfo, RegisterInfo, AuthResponse } from './auth.model';
import { StorageService } from '../shared/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private client: HttpClient, private storageService: StorageService) {
  }

  loginUser(loginInfo: LoginInfo) {
    this.client.post<AuthResponse>(`${environment.apiBaseUrl}/auth-user/`, loginInfo)
      .subscribe(
        data => this.storageService.set(data),
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
        data => this.storageService.set(data),
        err => console.log(err)
      );
  }

  async getToken() {
    return await this.storageService.get('token');
  }
}
