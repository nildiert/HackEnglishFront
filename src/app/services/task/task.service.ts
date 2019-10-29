import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';
import { Task } from 'src/app/models/task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  httpOptions: any;

  constructor(private http: HttpClient, httpService: HttpService) {
    this.httpOptions = httpService.httpOptions;
  }

  getTask(taskId: string) {
    return this.http.get<Task>(environment.url_task + `${taskId}`,
    this.httpOptions);
  }
}


// url_task_by_project: 'http://40.76.39.221:3000/user_projects/1/task_assignments/1'