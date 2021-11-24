import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfileComponent } from './edit-profile.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    EditProfileRoutingModule,
    IonicModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class EditProfileModule { }
