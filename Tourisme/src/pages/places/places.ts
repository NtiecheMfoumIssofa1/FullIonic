import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Place } from '../../model/place.model';
import { PlacesService } from '../../services/places.service';
import { NewPlacePage } from '../new-place/new-place';
import { DetailPlacePage } from '../detail-place/detail-place';

/**
 * Generated class for the PlacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {

  places:Array<Place>;   

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public placeService:PlacesService) {
  }
//cettevmethode native de ionic permet de charger les donn"es au chargement du formulai
  ionViewWillEnter(){
  this.placeService.getAllPlaces().then(data=>{
    this.places=data;
    console.log(data);
}).catch(err=>{
  console.log(err);  
});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPage');
  }

  onNewPlace(){
      this.navCtrl.push(NewPlacePage);
  }

  onDetailPlace(p:Place){
    console.log(p);
    this.navCtrl.push(DetailPlacePage,{place:p});
  }

}
