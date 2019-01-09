import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Camera } from '@ionic-native/camera';
//import { NgProgressModule } from '@ngx-progressbar/core';

import { MyApp } from './app.component';

import {
  ApartmentPage,
  HomePage,
  LoginPage,
  FindapartmentPage,
  FloorPage,
  TowerPage,
  TabsPage
} from "../pages/index.paginas";


@NgModule({
  declarations: [
    MyApp,
    ApartmentPage,
    HomePage,
    LoginPage,
    FindapartmentPage,
    FloorPage,
    TowerPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
    //NgProgressModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ApartmentPage,
    HomePage,
    LoginPage,
    FindapartmentPage,
    FloorPage,
    TowerPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera
  ]
})
export class AppModule {}
