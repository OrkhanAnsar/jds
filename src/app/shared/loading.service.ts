import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loading: HTMLIonLoadingElement;

  constructor(private loadingController: LoadingController) { }

  async present() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...'
    });

    await this.loading.present();
  }

  stop() {
    this.loading.dismiss();
  }
}
