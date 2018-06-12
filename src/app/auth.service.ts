import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Credentials } from './credentials';

@Injectable()
export class AuthService {
  credentials: Credentials;

  constructor(
    private http: HttpClient
  ) {
    this.credentials = {
      username: '',
      password: '',
      token: ''
    }
  }

  signIn(credentials: Credentials) {
    return new Promise((res, rej) => {
    const body = new HttpParams()
      .set('username', credentials.username)
      .set('password', credentials.password)
      .set('grant_type', 'password')
      .set('client_id', 'birdie')
      .set('client_secret', null)

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    this.http.post<any>(`${environment.AUTH_URL}/signin`, body.toString(), httpOptions)
      .subscribe(
        token => { console.log(token); this.credentials.token = token.access_token; res()}
      )
    })
  }
}