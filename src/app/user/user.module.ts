import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { IonicModule } from '@ionic/angular';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
