import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from '../models/exercise.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { TaskService } from '../services/task/task.service';
import { Task } from '../models/task.model';
import { Checker } from '../models/checker.model';
import swal from 'sweetalert2';
declare var $: any;


type textType = string | { input: string };
interface Options {
  [key: string]: string[];
}


@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent implements OnInit {

  checkers: Checker[] = [];

  // tslint:disable-next-line: no-input-rename
  @Input('modalEvent') public modalEvent: Subject<{ id: string }>;
  entryForm: FormGroup;
  myElements: string[];
  insert = document.getElementById('insert');
  // message = 'Hola mi #perro que hace o que pedos?, seguro anda #tocandote, que asquito, llave';
  public textEnd: textType[] = [];
  private options: Options = { first: ['am', 'am.'] };
  subscriptions: Subscription[] = [];

  messages2: Task[] = [];

  constructor(private formBuilder: FormBuilder, private taskService: TaskService) {
    this.entryForm = this.formBuilder.group({});
  }


  ngOnInit() {
    this.modalEvent.subscribe(value => {
      this.getTask(value.id);
      this.checkers = [];
    });
  }

  initDynamicallyForm(message: string) {
    this.entryForm = this.formBuilder.group({});
    const splitted = message.split(' ');
    this.textEnd = splitted.map<textType>(text => {
      if (text[0] === '#') {
        const slice = text.slice(1);
        this.entryForm.addControl(slice, this.formBuilder.control(''));
        return { input: slice };
      } else { return text; }
    });
  }

  send(): void {
    this.checkers = [];
    const entryForm = this.entryForm.controls;
    // this.submitted = true;
    for (const key in entryForm) {
      if (entryForm.hasOwnProperty(key)) {
        const control = entryForm[key];
        const value = control.value;
        const options = this.options[key];
        if (
          options &&
          !options.find(option => String(value).toLowerCase() === option)
        ) {
          control.setErrors({
            diferent: 'Is Diferent'
          });
        }
        control.markAsTouched();
      }
    }
    Object.keys(this.entryForm.value).forEach(key => {
      this.checkers.push({
        id: key,
        value: key === this.entryForm.value[key]
      });
    });
  }


  isString(value: any) {
    return typeof value === 'string';
  }

  getTask(taskId: string) {
    this.taskService.getTask(taskId)
      .subscribe((response: any) => {
        this.initDynamicallyForm(response.exercise);
      });
  }


}
