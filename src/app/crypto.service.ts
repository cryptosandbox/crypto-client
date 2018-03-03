import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { environment } from '../environments/environment';
import { Coin } from './coin';

@Injectable()
export class CryptoService {
  cryptoDataUrl = environment.API_URL + '/crypto';
  coins: Coin[];
  private alive: boolean;

  constructor(
    private http: HttpClient
  ) { 
    this.getCoins();

    IntervalObservable.create(7000)
      .subscribe(t => { this.getCoins() })
  }

  getCoins() {
    this.http.get<Coin[]>(this.cryptoDataUrl)
      .subscribe(coins => { this.coins = coins })
  }
}
