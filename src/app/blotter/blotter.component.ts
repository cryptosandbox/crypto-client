import { Component, OnInit } from '@angular/core';
import { Coin } from '../coin';
import { Wallet } from '../wallet';
import { CryptoService } from '../crypto.service';
import { TicketService } from '../ticket.service';
import { WalletService } from '../wallet.service';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";

import * as _ from 'lodash';

@Component({
  selector: 'app-blotter',
  templateUrl: './blotter.component.html',
  styleUrls: ['./blotter.component.css']
})
export class BlotterComponent implements OnInit {
  coins: Coin[];
  blinkClass: string[];
  selectedCoin: Coin;
  wallet: Wallet;

  constructor(
    public cryptoService: CryptoService,
    private ticketService: TicketService,
    public walletService: WalletService
  ) {
    this. blinkClass = [];
  }
  
  ngOnInit() {
    this.walletService.getWallet()
      .subscribe(wallet => { 
        if(wallet) {
          this.wallet = wallet;
        } else {
          this.wallet = new Wallet('', 0);
        }
      });
    
    this.cryptoService.getCoins()
      .subscribe(coins => {
        this.coins = coins;
      });

    IntervalObservable.create(3000)
    .subscribe(t => { 
      this.cryptoService.getCoins()
        .subscribe(coins => { 
          this.setFlash(coins, this.blinkClass);
          this.coins = coins;
         });
       });

  }

  selectCoin(coin: Coin){
    this.selectedCoin = coin;
    this.ticketService.createTicket(coin, this.wallet);
  }

  getTotal() {
    return 0;
  }

  setFlash(newCoins: Coin[], blinkClass: string[]) {
    _.forEach(this.coins, oldCoin => {
      let newCoin = _.find(newCoins, { 'coin': oldCoin.coin });
      if (newCoin.last > oldCoin.last) {
        blinkClass[newCoin.coin] = 'blinkgreen';
      } else if (newCoin.last < oldCoin.last) {
        blinkClass[newCoin.coin] = 'blinkred';
      } else {
        blinkClass[newCoin.coin] = 'blinkoff';
      }
    })
  }
}