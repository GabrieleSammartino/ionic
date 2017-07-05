import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ListPage } from '../pages/list/list';
import { FormPage } from '../pages/form/form';
import { CardsPage } from '../pages/cards/cards';
import { TabsPage } from '../pages/tabs/tabs';
import  {OneCard } from '../pages/onecard/onecard';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { NewsService } from '../providers/news.service';
@NgModule({
  declarations: [
    MyApp,
    ListPage,
    FormPage,
    CardsPage,
    TabsPage,
    OneCard
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    FormPage,
    CardsPage,
    TabsPage,
    OneCard
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NewsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
