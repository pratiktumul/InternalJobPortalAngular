import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { HRReportsRoutingModule } from './hr-reports-routing.module';
import { VacancyReportComponent } from './vacancy-report/vacancy-report.component';
import { ReportsDashboardComponent } from './reports-dashboard/reports-dashboard.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReportService } from './report.service';
import { ChartsModule } from 'ng2-charts';
import { LastLoginReportComponent } from './last-login-report/last-login-report.component';
import { EmpApplicationTrackReportComponent } from './emp-application-track-report/emp-application-track-report.component';

@NgModule({
  declarations: [VacancyReportComponent, ReportsDashboardComponent, LastLoginReportComponent, EmpApplicationTrackReportComponent],
  imports: [
    CommonModule,
    HRReportsRoutingModule,
    NgbModule,
    HttpClientModule,
    ChartsModule,
    NgxPaginationModule
  ],
  providers: [
    ReportService
  ],
})
export class HRReportsModule { }
