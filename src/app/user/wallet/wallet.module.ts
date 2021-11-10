import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { WalletComponent } from './wallet.component';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { TopupComponent } from './topup/topup.component';


@NgModule({
  declarations: [
    WalletComponent,
    TopupComponent
  ],
  imports: [
    CommonModule,
    WalletRoutingModule,
    IonicModule
  ]
})
export class WalletModule { }
