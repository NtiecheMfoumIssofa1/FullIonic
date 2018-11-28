import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contact={
    name:'youssouf',
    email:'you@gmail.com',
    photo:'assets/imgs/3.JPG'
  }

  constructor(public navCtrl: NavController) {

  }

}
