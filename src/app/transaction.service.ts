import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import { WalletService } from './wallet.service'

@Injectable()
export class TransactionService {
  constructor(
    private http: HttpClient,
    private walletService: WalletService
  ) {
  }

  postTransaction(walletId, coin, amount) {
    let transaction = {
      walletId: walletId,
      coin: coin,
      amount: amount
    }
    this.http.post(`${environment.API_URL}/transactions`, transaction)
      .subscribe( transaction => { this.walletService.getWallet() })
  }
}