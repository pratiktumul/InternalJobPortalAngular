import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralReport } from './Models/general-report';
import { VacancyReport } from './Models/vacancy-report';
import { CompanyReport } from './Models/company-report';
import { Loginmodel } from './Models/loginmodel';
import { EmployeeSkillLevel } from './Models/EmployeeSkill-level';


@Injectable({
  providedIn: 'root'
})
export class ReportService {

  generalReportURI = "https://localhost:44325/api/generalreport";
  vacancyReportURI = "https://localhost:44325/api/VacancyReport";
  empstatusURI = "https://localhost:44325/api/statushistory";
  EmployeeSKillLevelURL = "https://localhost:44325/api/GetEmployeeSkillDetails/";
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

  getLoginHistory(): Observable<Loginmodel> {
    return this._http.get<Loginmodel>(this.empstatusURI + "/loginhistory", {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    })
  }
  getEmployeeSkillLevelService(empid: number): Observable<EmployeeSkillLevel> {
    // return this._http.get<EmployeeSkillLevel>(this.empstatusURI + "/loginhistory", {
    return this._http.get<EmployeeSkillLevel>(this.EmployeeSKillLevelURL+ empid, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    })
  }
}