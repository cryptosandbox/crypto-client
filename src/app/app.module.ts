import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlotterComponent } from './blotter/blotter.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketService } from './ticket.service';
import { CryptoService } from './crypto.service';
import { UserService } from './user.service';
import { WalletService } from './wallet.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BlotterComponent,
    TicketComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    TicketService,
    CryptoService,
    UserService,
    WalletService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
