import { Component, OnInit } from '@angular/core';
import { Concept } from '../concept.model';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.scss']
})
export class ConceptsComponent implements OnInit {

  constructor() { }

  concepts = {
    level: 1,
    title: 'A1 - Elementary English Course',
    description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula tortor a ligula imperdiet, porta sodales diam tristique. Vestibulum semper rhoncus metus, vitae suscipit turpis. Phasellus sagittis volutpat ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum magna sed quam interdum, id interdum justo maximus. Sed pulvinar tellus sed pellentesque mollis. Sed rhoncus augue non iaculis posuere. Proin tempus, nunc ut tincidunt tincidunt, lacus justo consectetur risus, et facilisis diam quam eget nulla. Quisque tempus porta nisi, ut pretium enim faucibus sit amet. Maecenas sagittis vel enim non placerat. Sed quis cursus elit. ',
    project: 'Este es el proyecto',
    data: [
      {
        title: 'Important verbs',
        url: 'www.google.com'
      },
      {
        title: 'Important verbs',
        url: 'www.google.com'
      },
      {
        title: 'Important verbs',
        url: 'www.google.com'
      },
      {
        title: 'Important verbs',
        url: 'www.google.com'
      },
      {
        title: 'Important verbs',
        url: 'www.google.com'
      },
      {
        title: 'Important verbs',
        url: 'www.google.com'
      },
      {
        title: 'Important verbs',
        url: 'www.google.com'
      },
      {
        title: 'Important verbs',
        url: 'www.google.com'
      },
      {
        title: 'Important verbs',
        url: 'www.google.com'
      },
      {
        title: 'Important verbs',
        url: 'www.google.com'
      },
      {
        title: 'Important verbs',
        url: 'www.google.com'
      }
    ]

  };
  ngOnInit() {
  }
}
