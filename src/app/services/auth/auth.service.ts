import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Login } from '../../models/login.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = 'http://localhost:4000/signin';
  token;

  constructor(private http: HttpClient) { }



  signIn(login: Login) {
    return this.http.post(environment.url_login, login);
  }

  logout() {
    localStorage.removeItem('auth_token');
  }

  public get logIn(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }

  health() {
    return this.http.get(environment.url_health);
  }
}


