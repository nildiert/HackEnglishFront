import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor() { }
  @Input() taskData: Task;

  ngOnInit() {
  }

  toggleModal(id: string) {
    alert(id);
    document.getElementById(id).click();
  }
}
