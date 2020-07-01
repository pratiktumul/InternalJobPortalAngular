import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://localhost:44325';

  constructor(private _http: HttpClient) {}

  registerUser(regForm: any): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this._http
      .post<any>(this.apiUrl + '/api/register', regForm, httpOption)
      .catch(this.handleError);
  }
  private handleError(error: any) {
    let errMsg = error.message
      ? error.message
      : error.status
      ? `${error.status} - ${error.statusText}`
      : 'Server error';
    return Observable.throw(error);
  }

  userLogin(username, password) {
    let data =
      'username=' + username + '&password=' + password + '&grant_type=password';
    let reqHeader = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    return this._http.post(this.apiUrl + '/token', data, {
      headers: reqHeader,
    });
  }
  isLoggedIn() {
    return !localStorage.getItem('userToken');
  }
  getUserClaims() {
    return this._http.get(this.apiUrl + '/api/test', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    });
  }
}
