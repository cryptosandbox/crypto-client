import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  token: String;

  constructor(
    private http: HttpClient
  ) {
  }

  getAuthToken(user: User) {
    const body = new HttpParams()
      .set('username', user.name)
      .set('password', user.password)
      .set('grant_type', 'password')
      .set('client_id', 'birdie')
      .set('client_secret', null)

    this.http.post<String>(`${environment.API_URL}/auth/signin`,
      body.toString(), 
      { 
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    ).subscribe(token => {
      this.token = token;
    })
  }
}