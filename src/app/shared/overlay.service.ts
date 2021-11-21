import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  private _loading: HTMLIonLoadingElement;
  private _alert: HTMLIonAlertElement;

  constructor(private loadingController: LoadingController, private alertController: AlertController) { }

  async info(message: string) {
    await this.stopLoading();
    this._alert = await this.alertController.create({
      buttons: [
        'OK'
      ],
      keyboardClose: true,
      message: message,
      cssClass: 'info-alert'
    })

    return this._alert.present();
  }

  async error(message?: string) {
    await this.stopLoading();
    this._alert = await this.alertController.create({
      buttons: [
        'OK'
      ],
      message: message || 'Something went wrong...',
      cssClass: 'error-alert'
    })

    return this._alert.present();
  }

  async loading(message?: string) {
    this._loading = await this.loadingController.create({
      message: message || 'Please wait...',
      spinner: 'dots'
    });

    return this._loading.present();
  }

  stopLoading() {
    return this._loading?.dismiss();
  }
}
