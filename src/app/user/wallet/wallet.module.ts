import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { WalletComponent } from './wallet.component';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { TopupComponent } from './topup/topup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddWalletComponent } from './add-wallet/add-wallet.component';
import { TransactionIconPipe } from './transaction-icon.pipe';
import { TransactionTextPipe } from './transaction-text.pipe';


@NgModule({
  declarations: [
    AddWalletComponent,
    WalletComponent,
    TopupComponent,
    TransactionIconPipe,
    TransactionTextPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WalletRoutingModule,
    IonicModule
  ]
})
export class WalletModule { }
