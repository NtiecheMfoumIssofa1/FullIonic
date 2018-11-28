import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GalleryPage } from '../pages/gallery/gallery';
import { MeteoPage } from '../pages/meteo/meteo';
import { PlacesPage } from '../pages/places/places';
import { HttpModule } from '@angular/http';
import { GalleryService } from '../services/gallery.service';
import { DetailImagePage } from '../pages/detail-image/detail-image';
import { PlacesService } from '../services/places.service';
import { NewPlacePage } from '../pages/new-place/new-place';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation} from "@ionic-native/geolocation";
import { DetailPlacePage } from '../pages/detail-place/detail-place';
import { AgmCoreModule} from "@agm/core";
@NgModule({
  declarations: [ 
    MyApp,
    //importation des pages gallery,meteo et places
    HomePage,
    GalleryPage,
    MeteoPage,
    PlacesPage,
    DetailImagePage,
    NewPlacePage,
    DetailPlacePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
       // apiKey:'AIzaSyCJ7D2-23Gk_uQ22v3LUJ8OiFBsVVMBcM0'//key by morel
      apiKey:'AIzaSyDYn5ZIWDi7Jfx-vrfj04djEAjWEWL-QRU'//key by youssfi
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__PlacesData',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //on doit imperativement copier tout les pages declarées dans declarations ici 
    HomePage,
    GalleryPage,
    MeteoPage,
    PlacesPage,
    DetailImagePage,
    NewPlacePage,
    DetailPlacePage
  ],
  providers: [
    StatusBar,GalleryService,Geolocation, 
    SplashScreen,PlacesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
