import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peers',
  templateUrl: './peers.component.html',
  styleUrls: ['./peers.component.scss']
})
export class PeersComponent implements OnInit {
  
  constructor(private authService: AuthService, private router: Router) {
    if (!this.authService.logIn) {
      this.router.navigate(['signin']);
    }
   }

  people: User[] = [
    {
      name: 'Miyah Myles',
      role: 'Student',
      photo: 'https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6'
    },
    {
      name: 'June Cha',
      role: 'Student',
      photo: 'https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg'
    },
    {
      name: 'Iida Niskanen',
      role: 'Student',
      photo: 'https:\/\/randomuser.me\/api\/portraits\/women\/68.jpg'
    },
    {
      name: 'Renee Sims',
      role: 'Student',
      photo: 'https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg'
    },
    {
      name: 'Jonathan Nu\u00f1ez',
      role: 'Student',
      photo: 'https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg'
    },
    {
      name: 'Sasha Ho',
      role: 'Student',
      photo: 'https:\/\/images.pexels.com\/photos\/415829\/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb'
    },
    {
      name: 'Abdullah Hadley',
      role: 'Student',
      photo: 'https:\/\/images.unsplash.com\/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a72ca28288878f8404a795f39642a46f'
    },
    {
      name: 'Veeti Seppanen',
      role: 'Student',
      photo: 'https:\/\/randomuser.me\/api\/portraits\/men\/97.jpg'
    },
    {
      name: 'Thomas Stock',
      role: 'Student',
      photo: 'https:\/\/tinyfac.es\/data\/avatars\/B0298C36-9751-48EF-BE15-80FB9CD11143-500w.jpeg'
    },
    {
      name: 'Bonnie Riley',
      role: 'Student',
      photo: 'https:\/\/randomuser.me\/api\/portraits\/women\/26.jpg'
    }
  ];

  ngOnInit() {
  }

}
