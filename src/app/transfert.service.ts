import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transfert } from './shared/model/transfert';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransfertService {

  constructor(private http: HttpClient) { }

  getTransferts(): Observable<Transfert[]> {
    return this.http.get<Transfert[]>('/assets/transferts.json');
  }
}
