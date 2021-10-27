import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
  }

  async set(value: any) {
    Object.keys(value)
      .forEach(k => {
        this.storage.set(k, value[k]);
      });
  };

  async get(key: string) {
    return await this.storage.get(key);
  }
}
