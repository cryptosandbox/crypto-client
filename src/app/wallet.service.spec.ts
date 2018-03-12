import { TestBed, inject } from '@angular/core/testing';

import { WalletService } from './wallet.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('WalletService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        WalletService,
        HttpClient
      ]
    });
  });

  it('should be created', inject([WalletService], (service: WalletService) => {
    expect(service).toBeTruthy();
  }));
});
