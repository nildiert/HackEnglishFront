import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Login } from '../models/login.model';
import { SigninService } from '../services/login/signin.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  login: Login;

  emailField: FormControl;
  passwordField: FormControl;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {
    this.emailField = new FormControl('', [Validators.minLength(4), Validators.required]);
    this.passwordField = new FormControl('', [Validators.required]);
  }

  ngOnInit() {
  }

  loginApp() {
    if (this.emailField.valid && this.passwordField.valid) {
      const newLogin: Login = {
        user: {
          email: this.emailField.value,
          password: this.passwordField.value
        }
      };
      this.authService.signIn(newLogin)
        .subscribe((response: any) => {
          if (response) {
            localStorage.setItem('auth_token', response['auth_token']);
            this.router.navigate(['dashboard']);
          } else {
            console.log('null');
          }
        });
    }

  }
  status() {
    this.authService.health()
      .subscribe(response => {
        console.log(response);
      });
  }
}
