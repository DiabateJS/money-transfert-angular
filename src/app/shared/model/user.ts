import { Profil } from "./profil";

export interface User {
    id:number,
    login:string,
    pwd:string,
    nom:string,
    prenom:string,
    telephone:string,
    email:string,
    profil:Profil;
}