import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralReport } from './Models/general-report';
import { VacancyReport } from './Models/vacancy-report';
import { CompanyReport } from './Models/company-report';
import { Loginmodel } from './Models/loginmodel';
import { EmployeeApplicationTrack } from './Models/employee-application-track';
import { EmployeeSkillLevel } from './Models/employee-skill-level';
import { Vacancydetailmodel } from './Models/vacancydetailmodel';
import { CompanyModel } from './Models/company-model';


@Injectable({
  providedIn: 'root'
})
export class ReportService {

  generalReportURI = "https://localhost:44325/api/generalreport";
  vacancyReportURI = "https://localhost:44325/api/VacancyReport";
  empstatusURI = "https://localhost:44325/api/statushistory";
  empSkillURI = 'https://localhost:44325/api/EmployeeSkillReport';
  vacancyDetailURI = 'https://localhost:44325/api/VacancyDetail';
  constructor(private _http: HttpClient) { }

  getGeneralReport(): Observable<GeneralReport> {
    return this._http.get<GeneralReport>(this.generalReportURI, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    });
  }

  getVacancyByLocation(): Observable<VacancyReport[]> {
    return this._http.get<VacancyReport[]>(this.vacancyReportURI + "/LocationWise", {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    });
  }

  getVacancyByCompany(): Observable<CompanyReport[]> {
    return this._http.get<CompanyReport[]>(this.vacancyReportURI + "/CompanyWise", {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    });
  }

  getLoginHistory(): Observable<Loginmodel[]> {
    return this._http.get<Loginmodel[]>(this.empstatusURI + "/loginhistory", {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    })
  }

  getJobApplications(): Observable<EmployeeApplicationTrack[]> {
    return this._http.get<EmployeeApplicationTrack[]>(this.empstatusURI + "/applicationhistory", {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    })
  }

  getEmployeeSkill(id: number): Observable<EmployeeSkillLevel[]> {
    return this._http.get<EmployeeSkillLevel[]>(this.empSkillURI + '/' + id, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    }).catch(this.handleError);
  }
  private handleError(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }

  getVacancyDetail(id: number): Observable<Vacancydetailmodel[]> {
    return this._http.get<Vacancydetailmodel[]>(this.vacancyDetailURI + '/' + id, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    });
  }

  // getAllCompanies(): Observable<CompanyModel[]> {
  //   return this._http.get<CompanyModel[]>(this.vacancyDetailURI, {
  //     headers: new HttpHeaders({
  //       Authorization: 'Bearer ' + localStorage.getItem('userToken'),
  //     }),
  //   });
  // }

  getCompanies(): Observable<CompanyModel[]> {
    return this._http.get<CompanyModel[]>(this.vacancyDetailURI, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    });
  }
}