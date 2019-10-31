import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { PeopleService } from '../services/people/people.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private peopleService: PeopleService) {
    if (!this.authService.logIn) {
      this.router.navigate(['signin']);
    }
   }
  user: User[] = [];


  ngOnInit() {
    this.getPeers();
  }

  getPeers() {
    this.peopleService.getUser(localStorage.user_id)
    .subscribe((response: any) => {
      this.user = response;
      console.log(this.user);
    });
  }

}
