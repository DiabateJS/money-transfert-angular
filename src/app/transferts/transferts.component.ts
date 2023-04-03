import { Component, OnInit } from '@angular/core';
import { Transfert } from '../shared/model/transfert';
import { TransfertService } from '../transfert.service';

@Component({
  selector: 'app-transferts',
  templateUrl: './transferts.component.html',
  styleUrls: ['./transferts.component.scss']
})
export class TransfertsComponent implements OnInit {

  transferts: Transfert[] = [];

  constructor(private transfertService: TransfertService) { }

  ngOnInit(): void {
    this.transfertService.getTransferts().subscribe(data => {
      this.transferts = data;
    });
  }

}
