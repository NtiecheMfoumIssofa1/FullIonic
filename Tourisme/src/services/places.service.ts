import { Injectable } from "@angular/core";
import { Place } from "../model/place.model";
import { Storage } from "@ionic/storage";

@Injectable()
export class PlacesService{

    constructor(public storage:Storage){}

    private places:Array<Place>=[
            {title:"A"}, {title:"B"}, {title:"C"}
    ];

    addPlace(place:Place){
        //enregistrement dans collection
        this.places.push(place);
        //enregistrement dans le localStorage
        this.storage.set('places',this.places);
    }

    getAllPlaces(){
        return this.storage.get('places').then(data=>{
            this.places=data!=null?data:[];//si data != null return data sinon return vide
            return this.places; 
        })
    }
}