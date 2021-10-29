import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponsPageComponent } from './coupons-page/coupons-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  {
    path: 'coupons',
    component: CouponsPageComponent
  },
  {
    path: 'profile',
    component: ProfilePageComponent
  },
  {
    path: '**',
    redirectTo: 'coupons'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
