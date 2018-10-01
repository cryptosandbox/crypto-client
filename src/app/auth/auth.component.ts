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
  showWelcome: boolean;
  showSignIn: boolean;
  showSignUp: boolean;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private walletService: WalletService
  ) { }

  ngOnInit() {
    this.showWelcome = true;
    this.credentials = {
      username: '',
      email: '',
      password: '',
      token: null
    }
  }

  async onShowSignUp() {
    this.showSignUp = true
    this.showSignIn = this.showWelcome = false
  }

  async onShowSignIn() {
    this.showSignIn = true
    this.showWelcome = this.showSignUp = false
  }

  async onShowWelcome() {
    this.showWelcome = true
    this.showSignIn = this.showSignUp = false
  }

  async onSubmitSignIn() {
    await this.authService.signIn(this.credentials)
    // await this.userService.getUser()
    await this.walletService.getWallet()
  }

  async onSubmitSignUp() {
    await this.authService.signUp(this.credentials)
  }
}
