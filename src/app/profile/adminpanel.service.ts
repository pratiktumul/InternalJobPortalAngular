import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jobs } from '../jobs';

@Injectable({
  providedIn: 'root',
})
export class AdminpanelService {
  uri = 'https://localhost:44325/api/jobs';

  constructor(private http: HttpClient) {}

  getAllJobs(): Observable<Jobs[]> {
    let httpOptions = new HttpHeaders();
    return this.http.get<Jobs[]>(this.uri + '/getalljobs', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    });
  }
  addNewJob(jobForm: Jobs) {
    return this.http.post(this.uri + '/postjob', jobForm, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    });
  }
  deleteJobById(jobid: number): Observable<any> {
    return this.http.delete<any>(this.uri + '/' + jobid, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    });
  }
}
