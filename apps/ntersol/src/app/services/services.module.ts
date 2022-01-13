import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicesPage } from './services.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ServicesPage }]),
  ],
  declarations: [ServicesPage],
  exports: [ServicesPage],
})
export class ServicesPageModule {}
