import { BaseModule } from '@agnui/base';
import { UtilsModule } from '@agnui/utils';
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
    BrowserModule,
    BrowserAnimationsModule,
    HomePageModule,
    RouterModule.forRoot([
      { path: 'home', component: HomePage },
      { path: '', pathMatch: 'full', redirectTo: 'home' },
    ]),
    UtilsModule,
    BaseModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
