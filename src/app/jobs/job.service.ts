import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from './job';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  uri = 'https://localhost:44325/api/JobOpening';
  constructor(private http:HttpClient) { }

  getJobById(id:number):Observable<Job>{
    return this.http.get<Job>(this.uri+'/'+id);
  }
}
