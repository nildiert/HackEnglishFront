import { Component, OnInit, Input } from '@angular/core';
import { ProjectsService } from '../services/projects/projects.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Project } from '../models/project.model';
import { Level } from '../models/level.model';
import { AuthService } from '../services/auth/auth.service';
import { HttpService } from '../services/http/http.service';
import { Role } from '../models/role.model';
import { RolesService } from '../services/roles/roles.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  role: Role[] = [];

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private router: Router,
    private authService: AuthService,
    private httpService: HttpService,
    private rolesService: RolesService
  ) {
    if (!this.authService.logIn) {
      this.router.navigate(['signin']);
    }

  }


  projects: Project[] = [];

  courses: Level[] = [
    {
      title: 'A1 - Elementary English Course',
      description: 'In this course you will: Learn how to form important verbs., Talk about daily routine.',
      finished: 4,
      total: 60
    }
  ];

  ngOnInit() {
    this.projectsByUser();

  }

  roles() {
    this.rolesService.getRoles()
      .subscribe((response: any) => {
        console.log(response);
      });
  }

  projectsByUser() {
    this.projectsService.projectsByUser(localStorage.user_id)
    .subscribe((response: any) => {
      this.projects = response;
    });
  }

}
