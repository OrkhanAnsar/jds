import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  private _loading: HTMLIonLoadingElement;
  private _alert: HTMLIonAlertElement;

  constructor(private loadingController: LoadingController, private alertController: AlertController) { }

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

  async error(error?: string | any) {
    await this.stopLoading();
    this._alert = await this.alertController.create({
      buttons: [
        'OK'
      ],
      message: this.getErrorMessage(error),
      cssClass: 'error-alert'
    })

    return this._alert.present();
  }

  private getErrorMessage(error) {
    let message = '';

    if (!error) message = 'Something went wrong...';
    else if (typeof error === 'string') message = error;
    else if (error?.status === 400 && error?.error?.description) message = error.error.description;
    else if (error?.status === 401) message = 'Username or password are invalid';
    else if (error?.status === 422) Object.keys(error.error).forEach(key => message += `${error.error[key].join('\n')}\n\n`);
    else message = error.statusText;
    
    return message;
  }
}
