import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompanyPage } from './company.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CompanyPage }]),
  ],
  declarations: [CompanyPage],
  exports: [CompanyPage],
})
export class CompanyPageModule {}
