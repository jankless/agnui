import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusTrapDirective } from './focus-trap.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [FocusTrapDirective],
  exports: [FocusTrapDirective],
})
export class FocusTrapDirectiveModule {}
