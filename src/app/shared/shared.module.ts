import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from './storage.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { YearsCountPipe } from './years-count.pipe';



@NgModule({
  declarations: [
    ErrorPageComponent,
    YearsCountPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorPageComponent,
    YearsCountPipe
  ]
})
export class SharedModule { }
