import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopupComponent } from './topup/topup.component';
import { WalletComponent } from './wallet.component';

const routes: Routes = [
  {
    path: '',
    component: TopupComponent,
  },
  {
    path: 'topup',
    component: TopupComponent
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
