import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contact={
    name:'Youssouf',
    email:'youssouf.tiefa@gmail.com',
    photo:'assets/imgs/3.JPG'
  }

  constructor(public navCtrl: NavController) {

  }

}
