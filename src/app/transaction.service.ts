import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class TransactionService {
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
  }

  postTransaction(coin, amount) {
    let transaction = {
      coin: coin,
      amount: amount
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.authService.credentials.token}`
      })
    };

    this.http.post(`${environment.API_URL}/transactions`, transaction, httpOptions)
      .subscribe( transaction => { console.log(transaction) })
  }
}