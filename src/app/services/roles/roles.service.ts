import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  httpOptions: any;

  constructor(private http: HttpClient, httpService: HttpService) {
    this.httpOptions = httpService.httpOptions;
  }

  getRoles() {
    return this.http.get(environment.url_roles, this.httpOptions);
  }
}
