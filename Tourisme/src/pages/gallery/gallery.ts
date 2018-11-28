import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import "rxjs/add/operator/map"
import { GalleryService } from '../../services/gallery.service';
import { DetailImagePage } from '../detail-image/detail-image';
/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  motCle:string="";
  size:number=10;
  totalPages:number;
  currentPage:number=1;
  images:any={hits:[]};//iniatialisation avec hits pour permettre lors du scrolle de garder les elements précédents

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public galleryService:GalleryService,
    private loadingCrtl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  onSearch(){
   
      this.images.hits=[];
      this.doSearch();

  }

  //chercher les images sur le site pixabay
  doSearch(){
     //chargement de la page
   let loding= this.loadingCrtl.create({
    content:"Chargement des Données...."
  });
  loding.present();
//execution des requetes
     this.galleryService.chercher(this.motCle,this.size,this.currentPage)
      .subscribe(data=>{
         //1 this.images=data;
         //2 on parcours le resultat et on l'affecte au tablo d'image
         this.totalPages = data.totalHits / this.size; //calcul le nombre de page
         if(this.totalPages % this.size !=0) ++this.totalPages; //si le reste de la division est different de 0 alors passer a la page superieur
         data.hits.forEach(h => {
           this.images.hits.push(h);
         });
         //chargement terminé , quitter
      loding.dismiss();
      },err=>{
      //chargement terminé , quitter
      loding.dismiss();
      })
    /*
      this.http.get("https://pixabay.com/api/?key=10304215-1ecf2be979c1743825e98c240&q="+this.motCle+"&per_page=10&page=1")
        .map(resp=>resp.json())
        .subscribe(data=>{
          this.images=data;
        },err=>{
          console.log(err);
        })*/
  }
  //scrolling
  doInfinite(infinite){

    if(this.currentPage<this.totalPages){
      ++this.currentPage;
      console.log(this.currentPage+"/"+this.totalPages);
      this.doSearch();
      infinite.complete();//permet de notifier que l'evenement a été complété
    }
   
  }
  //routage vers page detail image
  onDetailImage(im){ 
    this.navCtrl.push(DetailImagePage,{myImage:im});
  }

}
