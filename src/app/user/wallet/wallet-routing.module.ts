import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWalletComponent } from './add-wallet/add-wallet.component';
import { TopupComponent } from './topup/topup.component';
import { WalletComponent } from './wallet.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'wallet',
    pathMatch: 'full'
  },
  {
    path: 'wallet',
    component: WalletComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: 'topup',
    component: TopupComponent
  },
  {
    path: 'add-wallet',
    component: AddWalletComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule { }
