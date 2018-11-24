import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';
import { TransactionService } from '../transaction.service';
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
    private transactionService: TransactionService,
    private walletService: WalletService
  ) {
  }

  ngOnInit() {
    this.ticket = this.ticketService.ticket;
  }

  qtyChange(quantity: number) {
    this.ticket.quantity = quantity;
  }

  buyNewBalance(): number {
    return +(this.ticket.balance) + +(this.ticket.quantity);
  }

  buyNewCash(): number {
    return this.buyNewBalance() * this.ticket.last;
  }

  sellNewBalance(): number {
    return this.ticket.balance - this.ticket.quantity;
  }

  sellNewCash(): number {
    return this.sellNewBalance() * this.ticket.last;
  }

  buyAction(): void {
    console.log(this.ticket.quantity)
    this.transactionService.postTransaction(this.ticket.coin, this.ticket.quantity)
  }

  sellAction(): void {
    console.log(-this.ticket.quantity)
    this.transactionService.postTransaction(this.ticket.coin, -this.ticket.quantity)
  }
}
