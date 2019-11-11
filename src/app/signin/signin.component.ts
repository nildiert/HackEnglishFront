import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Login } from '../models/login.model';
import { SigninService } from '../services/login/signin.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import Swal from 'sweetalert2';
import { catchError } from 'rxjs/operators';


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
          localStorage.setItem('auth_token', response.auth_token);
          localStorage.setItem('user_id', response.user_id);
          Swal.fire({
            title: 'You are welcome!',
            type: 'success',
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['projects']);
        }, err => {
          Swal.fire({
            title: 'Email or password is wrong',
            type: 'error',
            showConfirmButton: false,
            timer: 1500
          });
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
