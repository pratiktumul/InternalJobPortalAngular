import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HRReportsRoutingModule } from './hr-reports-routing.module';
import { VacancyReportComponent } from './vacancy-report/vacancy-report.component';
import { ReportsDashboardComponent } from './reports-dashboard/reports-dashboard.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReportService } from './report.service';


@NgModule({
  declarations: [VacancyReportComponent, ReportsDashboardComponent],
  imports: [
    CommonModule,
    HRReportsRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    ReportService
  ],
})
export class HRReportsModule { }
