import {
  Component, OnInit, Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Task } from '../models/task.model';
import { TaskComponent } from './../task/task.component';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  modalEvent = new EventEmitter();
  // parentMessage = 'ESte deberia ser el titulo';
  constructor() { }
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
  }

}
