import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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
