import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private storage: Storage) {
    this.init();
  }

  init() {
    this.storage.create();
  }

  set(key: string, value: any) {
    this.storage.set(key, value);
  };

  async get(key: string) {
    return await this.storage.get(key);
  }

  async clear() {
    await this.storage.clear();
  }
}
