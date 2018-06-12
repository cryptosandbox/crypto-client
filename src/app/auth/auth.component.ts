import { Component, OnInit } from '@angular/core';
import { Credentials } from '../credentials';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
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
    private userService: UserService,
    private walletService: WalletService
  ) { }

  ngOnInit() {
    this.credentials = {
      username: 'test',
      password: '123abc',
      token: null
    }
  }

  async onSubmit() {
    await this.authService.signIn(this.credentials)
    // await this.userService.getUser()
    await this.walletService.getWallet()
  }
}