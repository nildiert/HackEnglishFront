import { Injectable } from '@angular/core';
import { Project } from '../../models/project.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { ProjectDetail } from 'src/app/models/projectDetail.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[];
  httpOptions: any;

  constructor(private http: HttpClient, httpService: HttpService) {
    this.httpOptions = httpService.httpOptions;
  }

  getAllProjects() {
    return this.projects;
  }
  projectsByUser(userId: string) {
    return this.http.get<Project[]>(
      environment.url_projects_by_users + `${userId}/user_projects`,
      this.httpOptions
    );
  }

  projectDetail(projectId: string) {
    return this.http.get<ProjectDetail>(
      environment.url_projects + `${projectId}`,
      this.httpOptions
    );
  }


}
