import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlotterComponent } from './blotter/blotter.component';
import { TicketComponent } from './ticket/ticket.component';
import { HoldingsComponent } from './holdings/holdings.component';

@NgModule({
  declarations: [
    AppComponent,
    BlotterComponent,
    TicketComponent,
    HoldingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
