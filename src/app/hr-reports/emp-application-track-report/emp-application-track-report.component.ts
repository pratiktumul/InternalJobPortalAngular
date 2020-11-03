import { Component, OnInit } from '@angular/core';
import { EmployeeApplicationTrack } from '../Models/employee-application-track';
import { ReportService } from '../report.service';
import * as XLSX from 'xlsx';
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
  fileName: string = 'Employee_Application_Report.xlsx';
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

  exportexcel(): void {
    /* pass here the table id */
    let element = this.applicationData;
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Application-Report-Sheet');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }
}