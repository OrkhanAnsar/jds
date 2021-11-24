import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InterestsComponent } from './interests/interests.component';
import { DwollaRegisterComponent } from './dwolla-register/dwolla-register.component';
import { DwollaAddAccountComponent } from './dwolla-add-account/dwolla-add-account.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    InterestsComponent,
    DwollaRegisterComponent,
    DwollaAddAccountComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    IonicModule
  ]
})
export class AuthModule { }
