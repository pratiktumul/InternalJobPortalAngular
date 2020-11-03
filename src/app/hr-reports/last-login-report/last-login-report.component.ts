import { Component, OnInit } from '@angular/core';
import { Loginmodel } from '../Models/loginmodel';
import { ReportService } from '../report.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-last-login-report',
  templateUrl: './last-login-report.component.html',
  styleUrls: ['./last-login-report.component.css']
})
export class LastLoginReportComponent implements OnInit {
  isNavbarCollapsed: boolean = true;
  userName: string;
  currDate: Date;
  loginData: Loginmodel[];
  ttlrecords: number;
  page: number = 1;
  fileName: string = 'Login_Report.xlsx';
  constructor(private ReportServe: ReportService) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
    this.currDate = new Date();
    this.getEmployeeLoginHistory();
  }

  getEmployeeLoginHistory() {
    this.ReportServe.getLoginHistory().subscribe((res) => {
      this.loginData = res;
      console.log(this.loginData);
    });
  }

  exportexcel(): void {
    /* pass here the table id */
    let element = this.loginData;
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Login-Report-Sheet');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }
}