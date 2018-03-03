import { Component, OnInit } from '@angular/core';
import { Coin } from '../coin';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'app-blotter',
  providers: [CryptoService],
  templateUrl: './blotter.component.html',
  styleUrls: ['./blotter.component.css']
})
export class BlotterComponent implements OnInit {
  coins: Coin[];
  blinkClass: object[];
  selectedCoin: Coin;
  cryptoService: CryptoService;

  constructor(
    cryptoDataService: CryptoService
  ) { 
    this.cryptoService = cryptoDataService;
  }

  ngOnInit() {
  }

  getTotal() {
    // var total = 0;
    // for(var i = 0; i < this.coins.length; i++){
    //   var coin = this.coins[i];
    //   total += (coin.lastPrice * coin.amount)
    // }

    return 0;
  }
}