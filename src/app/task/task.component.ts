import { EventEmitter, Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/task.model';
import { Subject } from 'rxjs';

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
  insert = document.getElementById('insert');
  message = 'Hola mi #perro que hace o que pedos?, seguro anda #tocandote, que asquito, llave';

  constructor() { }
  @Input() taskData: Task;

  ngOnInit() {
  }

  toggleModal(id: string) {
    this.modalEvent.emit({id});
    this.idTask = id;
    $("#exampleModal").modal('show');
  }

}
