import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  user: User;

  constructor(
    private http: HttpClient
  ) {
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${environment.API_URL}/users/${id}`)
  }
}