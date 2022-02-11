import { BaseModule } from '@agnui/base';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ConfigPageModule } from './config/config.module';
import { ConfigPage } from './config/config.page';
import { HomePageModule } from './home/home.module';
import { HomePage } from './home/home.page';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BaseModule,
    BrowserModule,
    BrowserAnimationsModule,
    HomePageModule,
    ConfigPageModule,
    RouterModule.forRoot([
      { path: 'config', component: ConfigPage },
      { path: '', pathMatch: 'full', component: HomePage },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
