import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../../models/login.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http: HttpClient) { }

  signIn(login: Login) {
    return this.http.post(environment.url_login, login);
  }

  health() {
    return this.http.get(environment.url_health);
  }
}
