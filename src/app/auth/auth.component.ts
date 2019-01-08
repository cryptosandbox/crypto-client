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
  show: string;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private walletService: WalletService
  ) { }

  ngOnInit() {
    this.show = "signin";
    this.credentials = {
      username: '',
      email: '',
      password: '',
      token: null
    }
  }

  async onShowSignUp() {
    this.show = "signup"
  }

  async onShowSignIn() {
    this.show = "signin"
  }

  async onShowWelcome() {
    this.show = "welcome"
  }

  async onSubmitSignIn() {
    await this.authService.signIn(this.credentials)
    await this.userService.getUser()
    this.show = "signedin"
  }

  async onSubmitSignUp() {
    await this.authService.signUp(this.credentials)
    await this.userService.getUser()
  }

  async onSignOut() {
    this.show = "signin"
    this.authService.signOut()
  }
}
