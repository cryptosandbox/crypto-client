import { Component, OnInit } from '@angular/core';
import { Coin } from '../coin';
import { Wallet } from '../wallet';
import { CryptoService } from '../crypto.service';
import { TicketService } from '../ticket.service';
import { WalletService } from '../wallet.service';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";

@Component({
  selector: 'app-blotter',
  templateUrl: './blotter.component.html',
  styleUrls: ['./blotter.component.css']
})
export class BlotterComponent implements OnInit {
  coins: Coin[];
  blinkClass: object[];
  selectedCoin: Coin;
  wallet: Wallet;

  constructor(
    public cryptoService: CryptoService,
    private ticketService: TicketService,
    public walletService: WalletService
  ) {
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
          //this.updateCoins(coins);
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

  onPriceChange() {
    this.coins.forEach(coin => this.blinkClass[coin.coin] = 'blink-red')
  }

  onLastChange(event: any) {
    console.log(event)
    // console.log(`Price change for ${newCoin.coin}: ${oldLast} -> ${newCoin.last}`);
    // if (newCoin.last > oldLast) {
    //   this.blinkClass[newCoin.coin] = 'blink-green'
    // } else if (newCoin.last < oldLast) {
    //   this.blinkClass[newCoin.coin] = 'blink-red'
    // } else {
    //   this.blinkClass[newCoin.coin] = 'blink-off'
    // }
  }
}