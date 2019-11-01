import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';
import { Concept } from 'src/app/models/concept.model';

@Injectable({
  providedIn: 'root'
})
export class ConceptsService {

  people: Concept[];
  httpOptions = { 
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + localStorage.auth_token
    })
  };

  constructor(private http: HttpClient, httpService: HttpService) {
  }

  getConcepts() {
    return this.http.get<any>(environment.url_concepts + localStorage.user_id, this.httpOptions);
  }

}
