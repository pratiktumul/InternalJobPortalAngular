import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperadminService {
  uri2 = 'https://localhost:44325/api/superadmin';
  constructor(private http: HttpClient) { }
  //method for getting all the admin-registration requests
  getAllApplication(): Observable<any[]> {
    return this.http.get<any[]>(this.uri2, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    })
  }
  //method for approving admin-registration request
  approveUser(regForm: any, id: number): Observable<any> {
    return this.http.put<any>(this.uri2 + '/' + id, regForm, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    })
  }
}
