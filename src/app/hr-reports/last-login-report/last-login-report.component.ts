import { Component, OnInit } from '@angular/core';
import { Loginmodel } from '../Models/loginmodel';
import { ReportService } from '../report.service';

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
}