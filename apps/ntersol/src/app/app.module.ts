import { NtsModule } from '@agnui/nts';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RoutingModule } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RoutingModule, NtsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
