import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { Chart } from 'chart.js';

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
              backgroundColor: [  
                "#01579B",  
                "#0277BD",  
                "#288D1",  
                "#39BE5",  
                "#03A9F4",  
                "#29B6F6",  
                "#4FC3F7",  
                "#81D4FA",  
                "#B3E5FC",  
                "#E1F5FE",  
                "#E1F5FE"  
              ],
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
              backgroundColor: [  
                "#A8A8A8 ",  
                "#A9A9A9",  
                "#B0B0B0",  
                "#B8B8B8",  
                "#BEBEBE",  
                "#C0C0C0",  
                "#C8C8C8",  
                "#D0D0D0",  
                "#D3D3D3",  
                "#D8D8D8",  
                "#DCDCDC"  
              ],
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