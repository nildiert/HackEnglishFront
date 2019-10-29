import { EventEmitter, Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/task.model';
import { Subject } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('modalEvent') public modalEvent: Subject<{ id: string }>;
  idTask: string;
  index: number;
  myElements: string[];

  constructor() { }
  @Input() taskData: Task;

  ngOnInit() {
    // console.log(this.taskData)
  }

  toggleModal(id: string) {
    this.modalEvent.next({id});
    this.idTask = id;
    // document.getElementById('exampleModal').click();
    $('#exampleModal').modal('show');
  }

}
