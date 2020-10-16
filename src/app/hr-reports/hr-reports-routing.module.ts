import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../Guards/auth.guard';
import { CompanyReportComponent } from './company-report/company-report.component';
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
        path: 'companyreports',
        component: CompanyReportComponent,
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
