import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-login-report',
  templateUrl: './last-login-report.component.html',
  styleUrls: ['./last-login-report.component.css']
})
export class LastLoginReportComponent implements OnInit {
  isNavbarCollapsed: boolean = true;
  userName: string;
  currDate: Date
  constructor() { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
    this.currDate = new Date();
  }

}
