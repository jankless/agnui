import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponentModule } from './footer';
import { HeaderComponentModule } from './header';

@NgModule({
  imports: [CommonModule, HeaderComponentModule, FooterComponentModule],
  exports: [HeaderComponentModule, FooterComponentModule],
})
export class BaseModule {}
