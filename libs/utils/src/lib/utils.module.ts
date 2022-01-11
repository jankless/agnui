import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FocusTrapDirective } from './focus-trap/focus-trap.directive';
import { FocusTrapDirectiveModule } from './focus-trap/focus-trap.module';

@NgModule({
  imports: [CommonModule, FocusTrapDirectiveModule],
  exports: [FocusTrapDirectiveModule, FocusTrapDirective],
})
export class UtilsModule {}
