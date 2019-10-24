import { Component, OnInit } from '@angular/core';
import { User } from './../user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  user: User = 
    {
      name: 'Miyah Myles',
      role: 'Student',
      photo: 'https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg'
    };


  ngOnInit() {
  }

}
