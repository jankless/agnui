import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponentModule } from './footer';
import { HeaderComponentModule } from './header';
import { InputDirectiveModule } from './input';

@NgModule({
  imports: [
    CommonModule,
    HeaderComponentModule,
    FooterComponentModule,
    InputDirectiveModule,
  ],
  exports: [HeaderComponentModule, FooterComponentModule, InputDirectiveModule],
})
export class BaseModule {}
