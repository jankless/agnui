import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactComponentModule } from './contact/contact.module';
import { FooterComponentModule } from './footer/footer.module';
import { HeaderComponentModule } from './header/header.module';

@NgModule({
  imports: [
    CommonModule,
    ContactComponentModule,
    FooterComponentModule,
    HeaderComponentModule,
  ],
  exports: [
    ContactComponentModule,
    FooterComponentModule,
    HeaderComponentModule,
  ],
})
export class NtsModule {}
