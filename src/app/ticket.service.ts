import { Injectable } from '@angular/core';
import { Coin } from './coin';
import { Ticket } from './ticket';
import { User } from './user';
 
@Injectable()
export class TicketService {
  ticket: Ticket;

  constructor() {
    this.ticket = new Ticket("ABC",0,0,0);
  }

  createTicket(coin: Coin, user: User) {
    this.ticket.coin = coin.coin;
    this.ticket.last = coin.last;
    this.ticket.balance = user.holdings[coin.coin].amount;
  }
}
