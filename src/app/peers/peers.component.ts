import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { PeopleService } from '../services/people/people.service';

@Component({
  selector: 'app-peers',
  templateUrl: './peers.component.html',
  styleUrls: ['./peers.component.scss']
})
export class PeersComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private peopleService: PeopleService) {
    if (!this.authService.logIn) {
      this.router.navigate(['signin']);
    }
   }

  people: User[] = [];

  ngOnInit() {
    this.getPeers()
  }

  getPeers() {
    this.peopleService.getAllPeople()
    .subscribe((response: any) => {
      this.people = response;
    });
  }

}
