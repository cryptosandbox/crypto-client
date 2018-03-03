import { TestBed, inject } from '@angular/core/testing';

import { CryptoService } from './crypto.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptoService],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([CryptoService], (service: CryptoService) => {
    expect(service).toBeTruthy();
  }));
});
