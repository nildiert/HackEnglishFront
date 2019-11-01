import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
    if (!this.authService.logIn) {
      this.router.navigate(['signin']);
    }
   }

  ngOnInit() {
  }
  logOut() {
    this.authService.logout();
    this.router.navigate(['signin']);
  }

}
