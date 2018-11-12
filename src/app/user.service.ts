import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Wallet } from './wallet';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  user: User;
  wallet: Wallet;

  constructor(
    private http: HttpClient
  ) {
  }

  getUser() {
    if (this.user == null) {
      this.http.get<User>(`${environment.API_URL}/users`)
        .subscribe(user => this.user = user)
    }
  }
}