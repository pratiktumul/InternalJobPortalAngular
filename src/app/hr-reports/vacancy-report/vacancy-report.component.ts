import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { Chart } from 'chart.js';
import { VacancyReport } from '../Models/vacancy-report';

@Component({
  selector: 'app-vacancy-report',
  templateUrl: './vacancy-report.component.html',
  styleUrls: ['./vacancy-report.component.css']
})
export class VacancyReportComponent implements OnInit {
  isNavbarCollapsed: boolean = true;
  userName: string;
  currDate: Date
  location = [];
  vacancyByLocation = [];
  locationChart: any = [];
  Company = [];
  vacancyByCompany = [];
  companyChart: any = [];

  constructor(private ReportServe: ReportService) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
    this.currDate = new Date();
    this.getLocationReport();
    this.getCompanyReport();
  }

  getLocationReport() {
    this.ReportServe.getVacancyByLocation().subscribe((result: any) => {
      result.forEach(x => {
        this.location.push(x.Location);
        this.vacancyByLocation.push(x.Vacancy);
      });
      this
      this.locationChart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: this.location,
          datasets: [
            {
              data: this.vacancyByLocation,
              borderColor: '#000000',
              backgroundColor: "Blue",
              fill: true
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });
  }

  getCompanyReport() {
    this.ReportServe.getVacancyByCompany().subscribe((result: any) => {
      result.forEach(x => {
        this.Company.push(x.Company);
        this.vacancyByCompany.push(x.Vacancy);
      });
      this
      this.companyChart = new Chart('canvas2', {
        type: 'bar',
        data: {
          labels: this.Company,
          datasets: [
            {
              data: this.vacancyByCompany,
              borderColor: '#000000',
              backgroundColor: "Red",
              fill: true
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });
  }
}