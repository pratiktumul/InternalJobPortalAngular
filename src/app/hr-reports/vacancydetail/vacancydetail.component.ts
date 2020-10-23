import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Chart } from 'chart.js';
import { ToastrService } from 'ngx-toastr';
import { CompanyModel } from '../Models/company-model';
import { Vacancydetailmodel } from '../Models/vacancydetailmodel';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-vacancydetail',
  templateUrl: './vacancydetail.component.html',
  styleUrls: ['./vacancydetail.component.css']
})
export class VacancydetailComponent implements OnInit {
  isNavbarCollapsed: boolean = true;
  userName: string;
  currDate: Date
  Vacancy = [];
  JobTitle: any = [];
  CompanyReport: FormGroup;
  empty: any = [];
  public barChart: any = [];
  heading: string = 'Company-Job Title Wise Report';
  isTrue: boolean = true;
  companies: CompanyModel[];
  constructor(private _rs: ReportService, private fb: FormBuilder, private tstr: ToastrService) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
    this.currDate = new Date();
    this.CompanyReport = this.fb.group(
      {
        CompanyId: ['', Validators.required],
      }
    );
    this.getAllJobVacancies();
  }

  getAllJobVacancies() {
    this._rs.getCompanies().subscribe(res => this.companies = res);
  }

  getCompanyVacanyByJobs() {
    let bar_chart;
    this.Vacancy = [];
    this.JobTitle = [];
    const companyid: number = this.CompanyReport.controls['CompanyId'].value;
    this._rs.getVacancyDetail(companyid).subscribe((result) => {
      result.forEach(x => {
        this.Vacancy.push(x.vacancy);
        this.JobTitle.push(x.JobTitle);
      });
      if (bar_chart) {
        bar_chart.destroy();
      }
      //var ctx = document.getElementById("bar_chart").getContext("2d");
      bar_chart = new Chart('bar_chart', {
        type: 'bar',
        data: {
          labels: this.JobTitle,
          datasets: [
            {
              data: this.Vacancy,
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
      //this.barChart.destroy();
    });
  }
}
