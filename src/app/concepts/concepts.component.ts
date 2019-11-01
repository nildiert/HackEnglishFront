import { Component, OnInit } from '@angular/core';
import { Concept } from '../models/concept.model';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { ConceptsService } from '../services/concepts/concepts.service';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.scss']
})
export class ConceptsComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private conceptsService: ConceptsService) {
    if (!this.authService.logIn) {
      this.router.navigate(['signin']);
    }
   }

  concepts = [];
  data = [];
  ngOnInit() {
    this.getAllConcepts();
  }

  getAllConcepts() {
    this.conceptsService.getConcepts()
    .subscribe((response: any) => {
      this.data = response.levels;
      this.data.forEach((value: any) => {
        this.concepts = value;
      });
    });
  }

}
