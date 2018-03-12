import { Component, OnInit } from '@angular/core';
import { Coin } from '../coin';
import { Wallet } from '../wallet';
import { CryptoService } from '../crypto.service';
import { TicketService } from '../ticket.service';
import { WalletService } from '../wallet.service';

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
  }

  selectCoin(coin: Coin){
    this.selectedCoin = coin;
    this.ticketService.createTicket(coin, this.wallet);
  }

  getTotal() {
    return 0;
  }
}