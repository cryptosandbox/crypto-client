import { Component, OnInit } from '@angular/core';
import { Credentials } from '../credentials';
import { AuthService } from '../auth.service';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  credentials: Credentials;

  constructor(
    private authService: AuthService,
    private walletService: WalletService
  ) { }

  ngOnInit() {
    this.credentials = {
      username: '',
      password: '',
      token: null
    }
  }

  async onSubmit() {
    await this.authService.signIn(this.credentials)
    await this.userService.getUser()
    this.walletService.getWallet()
  }
}
