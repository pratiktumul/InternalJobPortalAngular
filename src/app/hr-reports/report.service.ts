import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralReport } from './Models/general-report';


@Injectable({
  providedIn: 'root'
})
export class ReportService {

  generalReportURI = "https://localhost:44325/api/generalreport";

  constructor(private _http: HttpClient) { }

  getGeneralReport(): Observable<GeneralReport> {
    return this._http.get<GeneralReport>(this.generalReportURI, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    });
  }
}