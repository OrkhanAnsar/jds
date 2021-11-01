import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageService } from '../shared/storage.service';
import { UserInfo } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private client: HttpClient, private storageService: StorageService) { }

  async getUser(): Promise<UserInfo> {
    const userId = (await this.storageService.get('auth')).id;
    return this.client.get<UserInfo>(`${environment.apiBaseUrl}/users/${userId}`).toPromise();
  }

  async signOut(): Promise<void> {
    await this.storageService.clear();  
  }

  async getInfo() {
    return await this.storageService.get('auth');
  }
}
