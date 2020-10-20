import { Component, OnInit } from '@angular/core';
import { EmployeeApplicationTrack } from '../Models/employee-application-track';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-emp-application-track-report',
  templateUrl: './emp-application-track-report.component.html',
  styleUrls: ['./emp-application-track-report.component.css']
})
export class EmpApplicationTrackReportComponent implements OnInit {

  isNavbarCollapsed: boolean = true;
  userName: string;
  currDate: Date;
  applicationData: EmployeeApplicationTrack[];
  ttlrecords: number;
  page: number = 1;
  constructor(private ReportServe: ReportService) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
    this.currDate = new Date();
    this.getEmployeeApplicationHistory();
  }

  getEmployeeApplicationHistory() {
    this.ReportServe.getJobApplications().subscribe((res) => {
      this.applicationData = res;
      console.log(this.applicationData);
    });
  }
}