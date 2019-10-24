import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Login } from '../login.model';
import { SigninService } from '../signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  login: Login;

  constructor(
    private route: ActivatedRoute,
    private signInService: SigninService
  ) { }

  ngOnInit() {
  }

  loginApp() {
    const newLogin: Login = {
      user: {
        email: 'bradykuphal@kreiger.io',
        password: 'PqA6KwFvZ'
      }
    };

    this.signInService.signIn(newLogin)
      .subscribe(response => {
        console.log(response);
      });
  }
  status() {
    this.signInService.health()
    .subscribe(response => {
      console.log(response);
    });
  }
}
