import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  emailField: FormControl;
  passwordField: FormControl;
  lastName: FormControl;
  firstName: FormControl;
  confirmPass: FormControl;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private registerService: RegisterService
  ) {
    this.emailField = new FormControl('', [Validators.minLength(4), Validators.required]);
    this.passwordField = new FormControl('', [Validators.required]);
    this.lastName = new FormControl('', [Validators.required]);
    this.firstName = new FormControl('', [Validators.required]);
    this.confirmPass = new FormControl('', [Validators.required]);
  }


  ngOnInit() {
  }

  register() {
    const newUser: any = {
      user: {
        email: this.emailField.value,
        password: this.passwordField.value,
        first_name: this.firstName.value,
        last_name: this.lastName.value,
        score: 0
      }
    };
    this.registerService.signUp(newUser)
    .subscribe((response: any) => {
      console.log(response);
    });
  }

}
