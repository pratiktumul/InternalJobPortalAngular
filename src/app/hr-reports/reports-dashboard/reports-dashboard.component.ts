import { Component, OnInit } from '@angular/core';
import { GeneralReport } from '../Models/general-report';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-reports-dashboard',
  templateUrl: './reports-dashboard.component.html',
  styleUrls: ['./reports-dashboard.component.css']
})
export class ReportsDashboardComponent implements OnInit {
  isNavbarCollapsed:boolean = true;
  generalReportData: GeneralReport;
  userName:string;
  currDate:Date
  constructor(private _rs : ReportService) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
    this.currDate = new Date();
    this._rs.getGeneralReport().subscribe((data) => {
      this.generalReportData = data;
    });
  }

}
