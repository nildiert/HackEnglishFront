import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + localStorage.auth_token
    })
  };

  constructor() {
  }

  setHeaders(token: string) {
    this.httpOptions.headers.set('Authorization', 'Bearer ' + token);
    return this.httpOptions;
  }

}
