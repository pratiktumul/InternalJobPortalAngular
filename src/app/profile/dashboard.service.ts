import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Userdashboard } from './userdashboard';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AppliedJobsModel } from './totalappliedjobs/applied-jobs-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  uri = 'https://localhost:44325/api/userdashboard';
  uri2 = 'https://localhost:44325/api/jobsuggestion';

  constructor(private http: HttpClient) { }

  getAppliedJobs(): Observable<Userdashboard> {
    return this.http.get<Userdashboard>(this.uri, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    });
  }
  getAppliedJobList(name: string): Observable<AppliedJobsModel[]> {
    return this.http.get<AppliedJobsModel[]>(this.uri+ "/jobsapplied/" + name, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    })
  }
  getSuggestedJobs(): Observable<any>{
    return this.http.get<any>(this.uri2, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    }).catch(this.handleError);
  }
  private handleError(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  } 
}