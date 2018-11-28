export class Place{
    title:string;
    country?:string;
    city?:string;
    timestamp?:number;
    keywords?:string;
    location?:{
        longitude:number,
        latitude:number
    };
    selected?:boolean; //le point d'interrogation veut que ces champs ne sont pas obligatoire
}