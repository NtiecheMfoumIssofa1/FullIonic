import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Place } from '../../model/place.model';

/**
 * Generated class for the DetailPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-place',
  templateUrl: 'detail-place.html',
})
export class DetailPlacePage {

  place:Place;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.place=navParams.get('place');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPlacePage');
  }

}
