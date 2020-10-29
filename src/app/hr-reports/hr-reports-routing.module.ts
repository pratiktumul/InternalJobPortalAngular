import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../Guards/auth.guard';
import { EmpApplicationTrackReportComponent } from './emp-application-track-report/emp-application-track-report.component';
import { EmpSkillReportComponent } from './emp-skill-report/emp-skill-report.component';
import { LastLoginReportComponent } from './last-login-report/last-login-report.component';
import { EmployeeApplicationTrack } from './Models/employee-application-track';
import { Vacancydetailmodel } from './Models/vacancydetailmodel';
import { ReportsDashboardComponent } from './reports-dashboard/reports-dashboard.component';
import { SkillempreportComponent } from './skillempreport/skillempreport.component';
import { SkilltrendsReportComponent } from './skilltrends-report/skilltrends-report.component';
import { VacancyReportComponent } from './vacancy-report/vacancy-report.component';
import { VacancydetailComponent } from './vacancydetail/vacancydetail.component';


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
        path: 'empskillreport',
        component: EmpSkillReportComponent,
        canActivate: [AuthGuard],
        data: { role: ['HR'] },
      },
      {
        path: 'trendingskills',
        component: SkilltrendsReportComponent,
        canActivate: [AuthGuard],
        data: { role: ['HR'] },
      },
      {
        path: 'skillempreport',
        component: SkillempreportComponent,
        canActivate: [AuthGuard],
        data: { role: ['HR'] },
      },
      {
        path: 'jobvacancyreport',
        component: VacancydetailComponent,
        canActivate: [AuthGuard],
        data: { role: ['HR'] },
      },      
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
