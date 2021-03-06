import { Injectable } from '@angular/core';
import { Coin } from './coin';
import { Ticket } from './ticket';
import { Wallet } from './wallet';
 
@Injectable()
export class TicketService {
  ticket: Ticket;

  constructor() {
    this.ticket = new Ticket("ABC",0,0,0);
  }

  createTicket(coin: Coin, wallet: Wallet) {
    this.ticket.coin = coin.coin;
    this.ticket.last = coin.last;
    if (wallet && wallet.holdings) {
      this.ticket.balance = wallet.holdings[coin.coin].amount;
    }
  }
}
