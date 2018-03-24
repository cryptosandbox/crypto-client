import { Component, OnInit } from '@angular/core';
import { Coin } from '../coin';
import { User } from '../user';
import { CryptoService } from '../crypto.service';
import { TicketService } from '../ticket.service';
import { UserService } from '../user.service';
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

  constructor(
    public cryptoService: CryptoService,
    private ticketService: TicketService,
    public userService: UserService
  ) {
    this. blinkClass = [];
  }
  
  ngOnInit() {
    this.userService.getUser('5ab68df6d1d09122d2155802')
      .subscribe(user => { 
        this.user = user;
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
    this.ticketService.createTicket(coin, this.user);
  }

  getTotal() {
    return 0;
  }

  getAmount(coin: string): number {
    let holding = _.find(this.user.holdings, { 'coin': coin })
    return holding ? holding.amount : 0
  }

  setFlash(newCoins: Coin[], blinkClass: string[]) {
    _.forEach(this.coins, oldCoin => {
      let newCoin = _.find(newCoins, { 'coin': oldCoin.coin });
      if (newCoin.last > oldCoin.last) {
        blinkClass[newCoin.coin] = 'blinkgreen';
      } else if (newCoin.last < oldCoin.last) {
        blinkClass[newCoin.coin] = 'blinkred';
      }
    })
  }
}