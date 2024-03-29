import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Http, ResponseContentType } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { User } from './user';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobapplicationService {
  webapiservice = 'https://localhost:44325/api/employeejobapplication';
  requestURL = 'https://localhost:44325/api/User_Image';
  refURL = "https://localhost:44325/api/JobReferal";
  SkillLevelUrl = "https://localhost:44325/api/addSkillLevel";
  constructor(private _http: HttpClient) { }

  downloadFile(): Observable<any> {
    return this._http
      .get('https://localhost:44325/api/UserDetails', {
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

  GetUserDetails(): Observable<any> {
    return this._http.get<any>(this.webapiservice, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    });
  }

  GetUserImage(): Observable<any> {
    return this._http.get(this.requestURL, {
      responseType: 'blob',
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      })
    }).catch(this.handleError);
  }

  GetUserImageById(id: number): Observable<any> {
    return this._http.get(this.requestURL + '/' + id, {
      responseType: 'blob',
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      })
    }).catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }

  AddEmployeeDetails(
    name: string,
    empid: string,
    loc: string,
    skill: string,
    year: string,
    month: string,
    about: string,
    project: string,
    fileUpload: File,
    JobId: string
  ) {
    const formData: FormData = new FormData();
    formData.append('Ename', name);
    formData.append('EmpId', empid);
    formData.append('Curloc', loc);
    formData.append('Skill', skill);
    formData.append('Year', year);
    formData.append('Month', month);
    formData.append('About', about);
    formData.append('Project', project);
    formData.append('Resume', fileUpload, fileUpload.name);
    formData.append('JobId', JobId);
    return this._http.post(this.webapiservice, formData, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    });
  }

  uploadImage(fileUpload: File) {
    const formData: FormData = new FormData();
    formData.append('ProfileImage', fileUpload, fileUpload.name);
    return this._http.post(this.requestURL, formData, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    });
  }

  SubmitRefApplication(refForm: any) {
    return this._http.post(this.refURL, refForm, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    });
  }

  GetJobDetailsReferral(id: number): Observable<any> {
    return this._http.get<any>(this.refURL + '/' + id, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    });
  }

  addSkillLevel(skillsRating: any[]) {
    console.log(skillsRating);
    return this._http.post(this.SkillLevelUrl, skillsRating, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    });

  }
}