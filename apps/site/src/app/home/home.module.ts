import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePage } from './home.page';

@NgModule({
  imports: [CommonModule],
  declarations: [HomePage],
  exports: [HomePage],
})
export class HomePageModule {}
