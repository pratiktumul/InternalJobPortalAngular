import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jobapplication } from './jobapplication';
import { Applicationdetail } from './applicationdetail';

@Injectable({
  providedIn: 'root'
})
export class HrService {

  uri = 'https://localhost:44325/api/hrportal';
  constructor(private _http: HttpClient) { }

  getAllJobApplications(): Observable<Jobapplication[]> {
    return this._http.get<Jobapplication[]>(this.uri, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    })
  }
  getApplicationDetails(id: number): Observable<Applicationdetail> {
    return this._http.get<Applicationdetail>(this.uri + '/' + id, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    });
  }
  downloadFile(id: number): Observable<any> {
    return this._http
      .get(this.uri+'/findresume/'+ id, {
        responseType: 'blob' as 'json',
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + localStorage.getItem('userToken'),
        }),
      })
      .catch((error: any) => {
        if (error.status === 404) {
          return Observable.throw(new Error(error.status));
        }
      });
  }
  updateApplicationStatus(id: number, appForm: any): Observable<any> {
    return this._http.put<any>(this.uri + '/' + id, appForm, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    });
  }
}
