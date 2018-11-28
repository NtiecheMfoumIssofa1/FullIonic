import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class GalleryService{
    public host:string="https://pixabay.com/api/";
    constructor(private http:Http){

    }
    chercher(query:string,size:number,page:number){
      return  this.http.get(this.host+"?key=10304215-1ecf2be979c1743825e98c240&q="
      +query+"&per_page="+size+"&page="+page)
            .map(resp=>resp.json()); 
    }

}