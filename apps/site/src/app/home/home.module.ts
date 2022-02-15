import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [HomePage],
  exports: [HomePage],
})
export class HomePageModule {}
