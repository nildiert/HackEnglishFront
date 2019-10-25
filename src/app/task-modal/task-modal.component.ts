import { Component, OnInit } from '@angular/core';
import { Exercise } from '../models/exercise.model';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent implements OnInit {


  constructor() {
    const message = 'Hola mi #perro que hace o que pedos?, seguro anda #masturbandose, que asquito, llave';
    this.convert(message);
  }

  ngOnInit() {
  }

  convert(msg: string) {
    let index: number = 0;
    let splitted = msg.split(' ');
    let myElements: string[];
    let insert = document.getElementById('insert');

    while (index < msg.length) {
      if (splitted[index].includes('#')) {
        myElements.push(splitted[index]);
        splitted[index] = `<input type="text"></input>`;
      }
      index++;
    }
    const textAppend: string = splitted.join(' ');
    insert.innerHTML += textAppend;
  }

}
