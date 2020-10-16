import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralReport } from './Models/general-report';
import { VacancyReport } from './Models/vacancy-report';
import { CompanyReport } from './Models/company-report';


@Injectable({
  providedIn: 'root'
})
export class ReportService {

  generalReportURI = "https://localhost:44325/api/generalreport";
  vacancyReportURI = "https://localhost:44325/api/VacancyReport/LocationWise";
  companyReportURI = "https://localhost:44325/api/VacancyReport/CompanyWise";

  constructor(private _http: HttpClient) { }

  getGeneralReport(): Observable<GeneralReport> {
    return this._http.get<GeneralReport>(this.generalReportURI, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    });
  }
  getVacancyReport(): Observable<VacancyReport> {
    return this._http.get<VacancyReport>(this.vacancyReportURI, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    });

  }
  getCompanyReport(): Observable<CompanyReport> {
    return this._http.get<CompanyReport>(this.companyReportURI, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    });

  }
}