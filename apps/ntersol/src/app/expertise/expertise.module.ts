import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExpertisePage } from './expertise.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ExpertisePage }]),
  ],
  declarations: [ExpertisePage],
  exports: [ExpertisePage],
})
export class ExpertisePageModule {}
