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

  constructor(
    private cryptoDataService: CryptoService
  ) { }

  ngOnInit() {
    this.cryptoDataService.getCryptoData()
      .subscribe(
        data => this.coins = data,
        error => console.error(error)
      );
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