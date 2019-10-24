import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http: HttpClient) { }

  signIn(login: Login) {
    return this.http.post('http://localhost:3000/signin', login);
  }

  health() {
    return this.http.get('http://localhost:3000/health');
  }
}
