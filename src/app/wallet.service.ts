import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wallet } from './wallet';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WalletService {
  wallet: Wallet;

  constructor(
    private http: HttpClient
  ) {
  }

  getWallet(id: string): Observable<Wallet> {
    return this.http.get<Wallet>(`${environment.API_URL}/wallets/${id}`)
  }
}