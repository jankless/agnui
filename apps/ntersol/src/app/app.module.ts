import { NtsModule } from '@agnui/nts';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RoutingModule } from './app.routing';
import { HomePage } from './home/home.page';

@NgModule({
  declarations: [AppComponent, HomePage],
  imports: [BrowserModule, RoutingModule, NtsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
