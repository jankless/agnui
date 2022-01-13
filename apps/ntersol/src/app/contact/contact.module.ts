import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactPage } from './contact.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactPage,
      },
    ]),
  ],
  declarations: [ContactPage],
  exports: [ContactPage],
})
export class ContactPageModule {}
