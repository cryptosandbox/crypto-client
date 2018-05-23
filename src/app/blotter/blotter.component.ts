import { Component, OnInit } from '@angular/core';
import { Coin } from '../coin';
import { User } from '../user';
import { Wallet } from '../wallet';
import { CryptoService } from '../crypto.service';
import { TicketService } from '../ticket.service';
import { UserService } from '../user.service';
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
  user: User;
  wallet: Wallet;

  constructor(
    public cryptoService: CryptoService,
    public ticketService: TicketService,
    public userService: UserService,
    public walletService: WalletService
  ) {
    this. blinkClass = [];
    this.wallet = new Wallet('default','default', null)
  }
  
  ngOnInit() {
    this.getWallet()
    this.getCoins()
    this.getTickingCoins()
  }

  selectCoin(coin: Coin) {
    this.selectedCoin = coin;
    this.ticketService.createTicket(coin, this.wallet);
  }

  getTotal() {
    return 0;
  }

  getAmount(coin: string): number {
    let holding = this.wallet[coin]
    return holding ? holding.amount : 0
  }

  setFlash(newCoins: Coin[], blinkClass: string[]) {
    _.forEach(this.coins, oldCoin => {
      let newCoin = _.find(newCoins, { 'coin': oldCoin.coin });
      if (newCoin.last > oldCoin.last) {
        blinkClass[newCoin.coin] = 'blinkgreen';
      } else if (newCoin.last < oldCoin.last) {
        blinkClass[newCoin.coin] = 'blinkred';
      } else {
        blinkClass[newCoin.coin] = 'noblink';
      }
    })
  }

  getWallet() {
    this.walletService.getWallet()
      .subscribe(wallet => this.wallet = wallet)
  }

  getCoins() {
    this.cryptoService.getCoins()
    .subscribe(coins => {
      this.coins = coins;
    });
  }

  getTickingCoins() {
    IntervalObservable.create(3000)
    .subscribe(t => { 
      this.cryptoService.getCoins()
        .subscribe(coins => { 
          this.setFlash(coins, this.blinkClass);
          this.coins = coins;
         });
       });
  }
}