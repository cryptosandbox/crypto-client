import { Component, OnInit } from '@angular/core';
import { Coin } from '../coin';
import { CryptoDataService } from '../crypto-data.service';

@Component({
  selector: 'app-blotter',
  providers: [CryptoDataService],
  templateUrl: './blotter.component.html',
  styleUrls: ['./blotter.component.css']
})
export class BlotterComponent implements OnInit {
  coins: Coin[];

  constructor(
    private cryptoDataService: CryptoDataService
  ) { }

  ngOnInit() {
    this.cryptoDataService.getCryptoData()
      .subscribe(
        data => this.coins = data,
        error => console.error(error)
      );
  }
}