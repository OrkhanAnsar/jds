import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      },
      {
        path: 'coupons',
        loadChildren: () => import('./coupons/coupons.module').then(m => m.CouponsModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'edit-profile',
        loadChildren: () => import('./edit-profile/edit-profile.module').then(m => m.EditProfileModule)
      },
      {
        path: 'wallet',
        loadChildren: () => import('./wallet/wallet.module').then(m => m.WalletModule)
      },
    ]
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
export class UserRoutingModule { }
