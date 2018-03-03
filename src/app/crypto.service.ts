import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import { Coin } from './coin';

@Injectable()
export class CryptoService {
  cryptoDataUrl = environment.API_URL + '/crypto';

  constructor(
    private http: HttpClient
  ) { }

  getCryptoData(): Observable<Coin[]> {
    return this.http
      .get<Coin[]>(this.cryptoDataUrl)
  }
}
