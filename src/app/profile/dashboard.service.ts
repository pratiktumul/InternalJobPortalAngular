import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Userdashboard } from './userdashboard';

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
  getAppliedJobList(name: string): Observable<any> {
    return this.http.get(this.uri+ "/jobsapplied/" + name, {
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
    })
  }
}
