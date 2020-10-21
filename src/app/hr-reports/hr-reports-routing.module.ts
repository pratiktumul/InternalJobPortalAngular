import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../Guards/auth.guard';
import { EmpApplicationTrackReportComponent } from './emp-application-track-report/emp-application-track-report.component';
import { EmployeeSkillReportComponent } from './employee-skill-report/employee-skill-report.component';
import { LastLoginReportComponent } from './last-login-report/last-login-report.component';
import { ReportsDashboardComponent } from './reports-dashboard/reports-dashboard.component';
import { VacancyReportComponent } from './vacancy-report/vacancy-report.component';


const routes: Routes = [
  {
    path: 'reports',
    children: [
      {path:'', component:ReportsDashboardComponent},
      {
        path: 'vacancyreports',
        component: VacancyReportComponent,
        canActivate: [AuthGuard],
        data: { role: ['HR'] },
      },      
      {
        path: 'lastloginreports',
        component: LastLoginReportComponent,
        canActivate: [AuthGuard],
        data: { role: ['HR'] },
      },      
      {
        path: 'applicationtrackreports',
        component: EmpApplicationTrackReportComponent,
        canActivate: [AuthGuard],
        data: { role: ['HR'] },
      },   
      {
        path: 'EmployeeSkillReport',
        component: EmployeeSkillReportComponent,
        canActivate: [AuthGuard],
        data: { role: ['HR'] },
      }   
    ],
    canActivate: [AuthGuard],
    data: { role: ['HR'] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HRReportsRoutingModule { }
