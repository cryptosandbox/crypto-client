import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';
import { Wallet } from '../wallet';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  ticket: Ticket;

  constructor(
    private ticketService: TicketService,
  ) {
  }

  ngOnInit() {
    this.ticket = this.ticketService.ticket;
  }

  qtyChange(quantity: number) {
    this.ticket.quantity = quantity;
  }

  buyNewBalance(): number {
    return +(this.ticketService.wallet.balance) + +(this.ticket.quantity);
  }

  buyNewCash(): number {
    return this.buyNewBalance() * this.ticket.last;
  }

  sellNewBalance(): number {
    return this.ticketService.wallet.balance - this.ticket.quantity;
  }

  sellNewCash(): number {
    return this.sellNewBalance() * this.ticket.last;
  }
}
