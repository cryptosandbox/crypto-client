import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlotterComponent } from './blotter.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CryptoService } from '../crypto.service';
import { TicketService } from '../ticket.service';
import { WalletService } from '../wallet.service';

describe('BlotterComponent', () => {
  let component: BlotterComponent;
  let fixture: ComponentFixture<BlotterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlotterComponent ],
      imports: [
        HttpClientModule
      ],
      providers: [
        CryptoService,
        TicketService,
        WalletService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
