import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { GalleryPage } from '../pages/gallery/gallery';
import { MeteoPage } from '../pages/meteo/meteo';
import { PlacesPage } from '../pages/places/places';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
//declarer un tableau de menu afin de le rendre dynamique lors de l'appel du cote front
menus=[
   {title:'My Gallery',component:GalleryPage},
   {title:'My Meteo',component:MeteoPage},
   {title:'Places',component:PlacesPage},
   {title:'Home',component:HomePage},
];
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  OnPage(m){
    //router vers la page selectionnée
    this.rootPage=m.component;

  }
}

