import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jobs } from '../jobs';
 
@Injectable({
  providedIn: 'root',
})
export class AdminpanelService {
  uri = 'https://localhost:44325/api/jobs';
  uri2 = 'https://localhost:44325/api/RequestApproval';
  constructor(private http: HttpClient) { }

  getAllJobs(): Observable<Jobs[]> {
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
  expireJobById(expiryStatus: any, id: number): Observable<any> {
    return this.http.put<any>(this.uri +'/'+ id, expiryStatus, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    });
  }
  getAllApplication(): Observable<any[]> {
    return this.http.get<any[]>(this.uri2, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    })
  }
  approveUser(regForm: any, id: number): Observable<any> {
    return this.http.put<any>(this.uri2 + '/' + id, regForm, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    })
  }
}
