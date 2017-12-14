import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { MateriPage } from '../pages/materi/materi';
import { QuizPage } from '../pages/quiz/quiz';
import { NilaiPage } from '../pages/nilai/nilai';
import { SplashPage } from '../pages/splash/splash';

import { ModulusPage } from'../pages/materi/modulus/modulus';
import { PendahuluanPage } from '../pages/materi/pendahuluan/pendahuluan';
import { PsebPage } from '../pages/materi/pseb/pseb';
import { ReganganPage } from '../pages/materi/regangan/regangan';
import { TeganganPage } from '../pages/materi/tegangan/tegangan';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    MateriPage,
    QuizPage,
    NilaiPage,
    SplashPage,
    ModulusPage,
    PendahuluanPage,
    PsebPage,
    ReganganPage,
    TeganganPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    MateriPage,
    QuizPage,
    NilaiPage,
    SplashPage,
    ModulusPage,
    PendahuluanPage,
    PsebPage,
    ReganganPage,
    TeganganPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpModule
  ]
})
export class AppModule {}
