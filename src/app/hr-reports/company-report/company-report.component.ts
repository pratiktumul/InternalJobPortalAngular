import { Component, OnInit } from '@angular/core';
import { CompanyReport } from '../Models/company-report';
import { ReportService } from '../report.service';
import { Chart } from 'chart.js';  

@Component({
  selector: 'app-company-report',
  templateUrl: './company-report.component.html',
  styleUrls: ['./company-report.component.css']
})
export class CompanyReportComponent implements OnInit {

  data: CompanyReport[];  
  Company = [];  
  vacancy = [];  
  barchart = []; 
  constructor(private ReportServe: ReportService) { }

  ngOnInit(): void {
    this.ReportServe.getCompanyReport().subscribe((result: any) => {  
      result.forEach(x => {  
        this.Company.push(x.Company);  
        this.vacancy.push(x.Vacancy);  
      });  
      this  
      this.barchart = new Chart('canvas', {  
        type: 'bar',  
        data: {  
          labels: this.Company,  
          datasets: [  
            {  
              data: this.vacancy,  
              borderColor: '#000000',  
              backgroundColor: [  
                "#3cb371",  
                "#0000FF",  
                "#9966FF",  
                "#4C4CFF",  
                "#00FFFF",  
                "#f990a7",  
                "#aad2ed",  
                "#FF00FF",  
                "Blue",  
                "Red",  
                "Blue"  
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
