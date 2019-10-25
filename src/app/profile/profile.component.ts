import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
    if (!this.authService.logIn) {
      this.router.navigate(['signin']);
    }
   }
  user: User =
    {
      name: 'Miyah Myles',
      role: 'Student',
      photo: 'https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg'
    };


  ngOnInit() {
  }

}
