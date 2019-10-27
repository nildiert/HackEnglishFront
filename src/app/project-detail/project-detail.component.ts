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
  // parentMessage = 'ESte deberia ser el titulo';
  constructor(private activatedRoute: ActivatedRoute, private projectsService: ProjectsService) {
    this.routeId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  project: ProjectDetail;

  tasks: Task[] = [{
    id: 1,
    title: 'TAsk 1',
    description: 'ljskdf sldfkaj sdfk saf klfjslkf sadklfj sadljk slkdj sdf ',
    exercise: 'sdfk ljsdlkfj sksf d# sdjfkl jksdlf # sjdlkf kjsdfl #',
    position: 1,
    project: 1,
  },
  {
    id: 2,
    title: 'TAsk 2',
    description: 'ljskdf sldfkaj sdfk saf klfjslkf sadklfj sadljk slkdj sdf ',
    exercise: 'sdfk ljsdlkfj sksf d# sdjfkl jksdlf # sjdlkf kjsdfl #',
    position: 2,
    project: 1,
  },
  {
    id: 3,
    title: 'TAsk 3',
    description: 'ljskdf sldfkaj sdfk saf klfjslkf sadklfj sadljk slkdj sdf ',
    exercise: 'sdfk ljsdlkfj sksf d# sdjfkl jksdlf # sjdlkf kjsdfl #',
    position: 3,
    project: 1,
  }];

  ngOnInit() {
    this.projectDescription();
  }

  projectDescription() {
    this.projectsService.projectDetail(this.routeId)
    .subscribe((response: any) => {
      this.project = response;
    });
  }
}
