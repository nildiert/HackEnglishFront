import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from '../models/exercise.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { TaskService } from '../services/task/task.service';
import { Task } from '../models/task.model';
import swal from 'sweetalert2';

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
            /**
             * @description
             * `Message to show when the {value} is diferent to the`
             * `array of options`
             */
            diferent: 'Is Diferent'
          });
        }
        /**
         * @description `Realiza validaciones en todos los formularios`
         */
        control.markAsTouched();
      }
    }
    Object.keys(this.entryForm.value).forEach(key => {
      if (key === this.entryForm.value[key]) {
        $(`#${key}`).addClass('green');
      } else {
        $(`#${key}`).addClass('red');
      }
    });

    // console.log(this.entryForm.value);
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
