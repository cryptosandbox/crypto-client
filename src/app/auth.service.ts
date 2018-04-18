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
  }

  getAuthToken(credentials: Credentials) {
    const body = new HttpParams()
      .set('username', credentials.username)
      .set('password', credentials.password)
      .set('grant_type', 'password')
      .set('client_id', 'birdie')
      .set('client_secret', null)

    this.http.post<string>(`${environment.API_URL}/auth/signin`,
      body.toString(),
      { 
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    ).subscribe(token => {
      this.credentials.token = token;
    })
  }
}