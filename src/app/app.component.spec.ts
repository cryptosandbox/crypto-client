import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BlotterComponent } from './blotter/blotter.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TicketComponent } from './ticket/ticket.component';
import { CryptoService } from './crypto.service';
import { TicketService } from './ticket.service';
import { WalletService } from './wallet.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        CryptoService,
        TicketService,
        WalletService
      ]
    }).compileComponents();
  }));
  it('should create the app', (done) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
    done();
  });
  it(`should have as title 'Cryptoplayground'`, (done) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Cryptoplayground');
    done();
  });
  it('should render title in a h1 tag', (done) => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Cryptoplayground');
    done();
  });
});
