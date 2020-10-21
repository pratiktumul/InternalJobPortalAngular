import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-application-track-report',
  templateUrl: './emp-application-track-report.component.html',
  styleUrls: ['./emp-application-track-report.component.css']
})
export class EmpApplicationTrackReportComponent implements OnInit {
  isNavbarCollapsed: boolean = true;
  userName: string;
  currDate: Date
  constructor() { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
    this.currDate = new Date();
  }

}
