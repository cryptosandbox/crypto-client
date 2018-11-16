import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Wallet } from './wallet';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  user: User;
  wallet: Wallet;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
  }

  getUser() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authentication': `Bearer ${this.authService.credentials.token}`
      })
    };

    if (this.user == null) {
      this.http.get<User>(`${environment.API_URL}/users`, httpOptions)
        .subscribe(user => this.user = user);
    }
  }
}