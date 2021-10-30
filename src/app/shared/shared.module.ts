import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from './storage.service';
import { ErrorPageComponent } from './error-page/error-page.component';



@NgModule({
  declarations: [
    ErrorPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorPageComponent
  ]
})
export class SharedModule { }
