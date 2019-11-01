
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { PeopleService } from '../services/people/people.service';
import Swal from 'sweetalert2';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  pass = '';
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
    });
  }

  logOut() {
    this.authService.logout();
    Swal.fire({
      title: 'Thanks for coming!',
      type: 'info',
      showConfirmButton: false,
      timer: 1500
    });
    this.router.navigate(['signin']);
  }

}
