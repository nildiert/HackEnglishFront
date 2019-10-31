import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {


  people: User[];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + localStorage.auth_token
    })
  };

  constructor(private http: HttpClient, httpService: HttpService) {
  }

  getUser(id: string) {
    return this.http.get<any>(environment.url_user + id, this.httpOptions);
  }
  getAllPeople() {
    return this.http.get<any>(environment.url_user, this.httpOptions);
  }
}
