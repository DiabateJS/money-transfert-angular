import { User } from "./user"

export interface Transfert {
    "id":1,
    "user":User,
    "beneficiaire":User,
    "montant":number,
    "codePromo":string,
    "modeReception":string,
    "operateurMobile":string,
    "motif":string,
    "statut":string,
    "operateur":User
}