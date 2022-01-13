import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CareersPage } from './careers.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CareersPage }]),
  ],
  declarations: [CareersPage],
  exports: [CareersPage],
})
export class CareersPageModule {}
