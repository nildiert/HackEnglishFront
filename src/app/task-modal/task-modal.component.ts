import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from '../models/exercise.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
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

  messages = {
          task1: 'Este es un #campo de como se #envia que debe #enviar esto',
    task2: 'El #cosito de andres',
    task3: 'El #cosits de los dos #info destroyer'
  };

  constructor(private formBuilder: FormBuilder) {
    this.entryForm = this.formBuilder.group({});
  }

  ngOnInit() {
    this.subscriptions.push(this.modalEvent.subscribe(value => {
      this.initDynamicallyForm(this.messages['task' + value.id]);
      console.log(value, this.messages['task' + value.id]);
    }));
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

    console.log(this.entryForm.value);
  }


  isString(value: any) {
    return typeof value === 'string';
  }
}
