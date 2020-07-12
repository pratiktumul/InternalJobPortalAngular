import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, ResponseContentType } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class JobapplicationService {
  webapiservice = 'https://localhost:44325/api/employeejobapplication';
  constructor(private _http: HttpClient) {}

  downloadFile(): Observable<any> {
    return this._http
      .get('https://localhost:44325/api/UserDetails', {
        responseType: 'blob' as 'json',
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + localStorage.getItem('userToken'),
        }),
      })
      .catch((error: any) =>{
        if (error.status === 404) {
            return Observable.throw(new Error(error.status));
        }
    });
  }
  
  GetUserDetails(): Observable<User> {
    return this._http.get<User>(this.webapiservice, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    });
  }

  AddEmployeeDetails(
    name: string,
    loc: string,
    skill: string,
    year: string,
    month: string,
    about: string,
    project: string,
    fileUpload: File
  ) {
    const formData: FormData = new FormData();
    formData.append('Ename', name);
    formData.append('Curloc', loc);
    formData.append('Skill', skill);
    formData.append('Year', year);
    formData.append('Month', month);
    formData.append('About', about);
    formData.append('Project', project);
    formData.append('Resume', fileUpload, fileUpload.name);
    return this._http.post(this.webapiservice, formData, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    });
  }
}
