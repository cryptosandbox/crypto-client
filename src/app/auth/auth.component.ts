import { Component, OnInit } from '@angular/core';
import { Credentials } from '../credentials';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  credentials: Credentials;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.credentials = {
      username: '',
      password: '',
      token: null
    }
  }

  onSubmit() {
    this.authService.signIn(this.credentials)
  }
}
