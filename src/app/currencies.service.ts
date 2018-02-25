import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import { Currency } from './currency';

@Injectable()
export class CryptoDataService {
  cryptoDataUrl = environment.API_URL + '/crypto-data';

  constructor(
    private http: HttpClient
  ) { }

  getCryptoData(): Observable<Currency[]> {
    return this.http
      .get<Currency[]>(this.cryptoDataUrl)
  }
}
