import { BaseModule } from '@agnui/base';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageModule } from './home/home.module';
import { HomePage } from './home/home.page';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BaseModule,
    BrowserModule,
    BrowserAnimationsModule,
    HomePageModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', component: HomePage },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
