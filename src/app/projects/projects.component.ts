import { Component, OnInit, Input } from '@angular/core';
import { ProjectsService } from '../services/projects/projects.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Project } from '../models/project.model';
import { Level } from '../models/level.model';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private router: Router,
    private authService: AuthService
    ) {
      if (!this.authService.logIn) {
        this.router.navigate(['signin']);
      }
    }


    projects: Project[] = [
      {
        id: 1,
        name: 'A1 - Lesson 01 - Greetings and Introductions',
        description: 'Asking for and giving personal information',
        position: 1,
        level_id: 1
      },
      {
        id: 2,
        name: 'A1 - Lesson 02 - Alphabet & Spelling',
        description: 'Letters of alphabet, Spelling practice',
        position: 2,
        level_id: 1
      },
      {
        id: 3,
        name: 'A1 - Lesson 01 - Greetings and Introductions',
        description: 'Asking for and giving personal information',
        position: 3,
        level_id: 1
      }
    ];

    courses: Level[] = [
      {
        title: 'A1 - Elementary English Course',
        description: 'In this course you will: Learn how to form important verbs., Talk about daily routine.',
        finished: 4,
        total: 60
      }
    ];

  ngOnInit() {

  }
}
