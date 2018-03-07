import { Component, OnInit } from '@angular/core';
import { Coin } from '../coin';
import { CryptoService } from '../crypto.service';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-blotter',
  providers: [CryptoService],
  templateUrl: './blotter.component.html',
  styleUrls: ['./blotter.component.css']
})
export class BlotterComponent implements OnInit {
  coins: Coin[];
  blinkClass: object[];
  selectedCoin: Coin;

  constructor(
    public cryptoService: CryptoService,
    private ticketService: TicketService
  ) { 
  }

  ngOnInit() {
  }

  selectCoin(coin: Coin){
    this.selectedCoin = coin;
    this.ticketService.createTicket(coin);
  }

  getTotal() {
    return 0;
  }
}