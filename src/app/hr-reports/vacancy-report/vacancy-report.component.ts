import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacancy-report',
  templateUrl: './vacancy-report.component.html',
  styleUrls: ['./vacancy-report.component.css']
})
export class VacancyReportComponent implements OnInit {
  isNavbarCollapsed:boolean = true;
  userName:string;
  currDate:Date
  constructor() { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
    this.currDate = new Date();
  }
 
}
