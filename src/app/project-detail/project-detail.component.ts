import {
  Component, OnInit, Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Task } from '../models/task.model';
import { TaskComponent } from './../task/task.component';
import { ActivatedRoute } from '@angular/router';
import { ProjectDetail } from '../models/projectDetail.model';
import { ProjectsService } from '../services/projects/projects.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  modalEvent = new EventEmitter();
  routeId: string;
  project: ProjectDetail[] = [];
  // parentMessage = 'ESte deberia ser el titulo';
  constructor(private activatedRoute: ActivatedRoute, private projectsService: ProjectsService) {
    this.routeId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  tasks: Task[] = [];

  ngOnInit() {
    this.projectDescription();
    this.taskByProject();
  }

  projectDescription() {
    this.projectsService.projectDetail(this.routeId)
    .subscribe((response: any) => {
      this.project = response;
      // console.log(response);
    });
  }

  taskByProject() {
    this.projectsService.taskByProject(this.routeId)
    .subscribe((response: any) => {
      this.tasks = response;
    });
  }

}
