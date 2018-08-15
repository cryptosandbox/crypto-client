import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NvD3Module } from 'ng2-nvd3';

import { AppComponent } from './app.component';
import { BlotterComponent } from './blotter/blotter.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketService } from './ticket.service';
import { CryptoService } from './crypto.service';
import { UserService } from './user.service';
import { WalletService } from './wallet.service';
import { AuthService } from './auth.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { TransactionService } from './transaction.service';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BlotterComponent,
    TicketComponent,
    AuthComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NvD3Module
  ],
  providers: [
    HttpClient,
    TicketService,
    CryptoService,
    UserService,
    WalletService,
    AuthService,
    TransactionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
