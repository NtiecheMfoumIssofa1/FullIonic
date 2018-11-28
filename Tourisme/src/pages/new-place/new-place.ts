import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Place } from '../../model/place.model';
import { PlacesService } from '../../services/places.service';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the NewPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage { 

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public placesService:PlacesService,
              public geolocation:Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlacePage');
  }

  /*addlocation(place:Place){
       if(
          this.geolocation.getCurrentPosition()
          .then(position=>{
            place.location.latitude=position.coords.latitude;
            place.location.longitude=position.coords.longitude;
            this.placesService.addPlace(place);
           this.navCtrl.pop(); //revenir a la page précédente 
           })
      ){
         
       }else{
        place.location.latitude=0;
        place.location.longitude=0;
        this.placesService.addPlace(place);
           this.navCtrl.pop(); //revenir a la page précédente 
       }
  }*/
  onAddPlace(place:Place){
    //initialisation coordonnée geolocalisation
    place.location={longitude:0,latitude:0};
    //enregistrement de la date system
    place.timestamp=new Date().getTime();
    //retoune la localisation courrante
    this.geolocation.getCurrentPosition()
        .then(position=>{
          place.location.longitude=position.coords.longitude;
          place.location.latitude=position.coords.latitude;
          this.placesService.addPlace(place);
           this.navCtrl.pop(); //revenir a la page précédente 
        })
        .catch(err=>{
          place.location.longitude=0;
          place.location.latitude=0;
          this.placesService.addPlace(place);
           this.navCtrl.pop(); //revenir a la page précédente 
        });
      
  }

}
