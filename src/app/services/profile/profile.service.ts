import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  httpOptions: any;
  profile: User;
  constructor(private http: HttpClient, httpService: HttpService) {
    this.httpOptions = httpService.setHeaders;
  }

  getProfile(id: string) {
    // return this.http.get<User>(environment.user+ `${id}`, this.httpOptions);
    console.log('getProfile')
  }
}
