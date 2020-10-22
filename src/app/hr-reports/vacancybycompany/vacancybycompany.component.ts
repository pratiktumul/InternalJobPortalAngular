import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Chart from 'chart.js';
import { CompanyName } from '../Models/company-name';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-vacancybycompany',
  templateUrl: './vacancybycompany.component.html',
  styleUrls: ['./vacancybycompany.component.css']
})
export class VacancybycompanyComponent implements OnInit {
  isNavbarCollapsed: boolean = true;
  userName: string;
  currDate: Date
  companyName: CompanyName;
  submitCompanyName: FormGroup;
  jobtitlename= [];
  jobvacancies= [];
  CompanyVacanciesChart:any = [];

  constructor(private ReportServe: ReportService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
    this.currDate = new Date();
    this.getCompanyName();  
    this.submitCompanyName = this.fb.group({
      company_name: ['', Validators.required],   // will use the property in html page  
    })

  }
  getCompanyName() {
    this.ReportServe.getCompanyNames().subscribe(res => this.companyName = res);
  }
 
  createCompanyVacancyChart() {
    this.jobtitlename =[];
    this.jobvacancies =[];
    const CompanyName = this.submitCompanyName.controls['company_name'].value;
    this.ReportServe.getCompanyVacancies(CompanyName).subscribe((result: any) => {
      result.forEach(x => {
      
        this.jobtitlename.push(x.JobTitle);
        this.jobvacancies.push(x.Vacancy);
      });
      this
      this.CompanyVacanciesChart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: this.jobtitlename,
          datasets: [
            {
              data: this.jobvacancies,
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
              display: true,
              ticks: {
                suggestedMin: 0
            }
              
            }],
          }
        }
      });
    });
  }
}
