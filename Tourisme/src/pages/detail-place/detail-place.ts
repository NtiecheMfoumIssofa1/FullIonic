import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Place } from '../../model/place.model';
import { Camera, CameraOptions } from '@ionic-native/camera';

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
  photo:string;

  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               public camera:Camera,
              public alertCtrl:AlertController) {
    this.place=navParams.get('place');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPlacePage');
  }
//prendre une photo
  onTakePicture(){
   //option1
   const options1:CameraOptions = {
     quality:50,
     destinationType:this.camera.DestinationType.DATA_URL,
     encodingType:this.camera.EncodingType.JPEG,
     mediaType:this.camera.MediaType.PICTURE,
     sourceType:this.camera.PictureSourceType.CAMERA,
     allowEdit:true,//accorde le droit de modification de photo par l'utilisateur
     targetWidth:320,
     targetHeight:240
   };

   //option2
   const options2:CameraOptions = {
    quality:50,
    destinationType:this.camera.DestinationType.DATA_URL,
    encodingType:this.camera.EncodingType.JPEG,
    mediaType:this.camera.MediaType.PICTURE,
    sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
    allowEdit:true,//accorde le droit de modification de photo par l'utilisateur
    targetWidth:320,
    targetHeight:240
  };

  let alert=this.alertCtrl.create({
    title:"Source",
    subTitle:'Quelle source?',
    buttons:[
      {text:'Camera',handler:()=>{this.takePicture(options1);}},
      {text:'Library',handler:()=>{this.takePicture(options2);}},
    ]
  });
  alert.present();//affiche la boite de dialogue avec la question subTitle
  }

  takePicture(options){
    this.camera.getPicture(options)
      .then(data=>{
        this.photo='data:image/jpeg;base64'+data;//ajouter ça : data:image/jpeg;base64 pour enregistrer la photo en string
      })
      .catch(err=>{
        console.log(err);
      })
  }

}
