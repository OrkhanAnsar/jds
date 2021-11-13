import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from './storage.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { YearsCountPipe } from './years-count.pipe';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    ErrorPageComponent,
    YearsCountPipe
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ErrorPageComponent,
    YearsCountPipe
  ]
})
export class SharedModule { }
