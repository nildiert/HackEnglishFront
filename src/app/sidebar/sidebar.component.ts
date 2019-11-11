import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http/http.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { PeopleService } from '../services/people/people.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  img = 'https://files.slack.com/files-pri/T0ENXA7A8-FQ4663ZAT/hack-logo.png';
  photo: string;
  constructor(
    private httpService: HttpService,
    private router: Router,
    private authService: AuthService,
    private peopleService: PeopleService
    ) {
    if (!this.authService.logIn) {
      this.router.navigate(['signin']);
    }
  }

  ngOnInit() {
    this.userData();
  }

  userData() {
    this.peopleService.getUser(localStorage.user_id)
    .subscribe((response: any) => {
      localStorage.setItem('profile_pic', response.profile_pic);
      this.photo = localStorage.profile_pic;
    });
  }

}
