import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wallet } from './wallet';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WalletService {
  wallet: Wallet;
  walletUrl = environment.API_URL + '/wallets?owner=mduguay';

  constructor(
    private http: HttpClient
  ) {
  }

  getWallet(): Observable<Wallet> {
    return this.http.get<Wallet>(this.walletUrl)
  }
}