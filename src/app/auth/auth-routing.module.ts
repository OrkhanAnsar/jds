import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from '../shared/error-page/error-page.component';
import { DwollaAddAccountComponent } from './dwolla-add-account/dwolla-add-account.component';
import { DwollaRegisterComponent } from './dwolla-register/dwolla-register.component';
import { InterestsComponent } from './interests/interests.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'interests',
    component: InterestsComponent
  },
  {
    path: 'dwolla-registration',
    component: DwollaRegisterComponent
  },
  {
    path: 'dwolla-add-account',
    component: DwollaAddAccountComponent
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
