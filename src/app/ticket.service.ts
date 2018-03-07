import { Injectable } from '@angular/core';
import { Coin } from './coin';
import { Ticket } from './ticket';
 
@Injectable()
export class TicketService {
  ticket: Ticket;

  constructor() {
    this.ticket = new Ticket("ABC",0,0,0);
  }

  createTicket(coin: Coin) {
    this.ticket.coin = coin.coin;
    this.ticket.last = coin.last;
  }
}
