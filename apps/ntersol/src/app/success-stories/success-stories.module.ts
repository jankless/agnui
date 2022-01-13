import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SuccessStoriesPage } from './success-stories.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SuccessStoriesPage }]),
  ],
  declarations: [SuccessStoriesPage],
  exports: [SuccessStoriesPage],
})
export class SuccessStoriesPageModule {}
