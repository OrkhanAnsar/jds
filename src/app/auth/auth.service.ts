import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { LoginInfo, LoginResponse } from './auth.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private client: HttpClient) { }

  loginUser(loginInfo: LoginInfo): Observable<LoginResponse> {
    return this.client.post<LoginResponse>(`${environment.apiBaseUrl}/auth-user/`, loginInfo)
  }
}
