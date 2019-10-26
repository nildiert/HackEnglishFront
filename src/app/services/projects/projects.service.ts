import { Injectable } from '@angular/core';
import { Project } from '../../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {



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

  constructor() { }

  getAllProjects() {
    return this.projects;
  }

}
