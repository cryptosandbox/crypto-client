import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Wallet } from './wallet';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class WalletService {
  wallet: Wallet;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
  }

  getWallet() {
    console.log('getting wallets with token:', this.authService.credentials.token)
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.authService.credentials.token
      })
    };

    this.http.get<Wallet>(`${environment.API_URL}/wallets`, httpOptions)
      .subscribe(wallet => this.wallet = wallet)
  }
}