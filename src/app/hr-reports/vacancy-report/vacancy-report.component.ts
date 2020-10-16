import { Component, OnInit } from '@angular/core';
import { VacancyReport } from '../Models/vacancy-report';
import { Chart } from 'chart.js';  
import { ReportService } from '../report.service';

@Component({
  selector: 'app-vacancy-report',
  templateUrl: './vacancy-report.component.html',
  styleUrls: ['./vacancy-report.component.css']
})
export class VacancyReportComponent implements OnInit {

  data: VacancyReport[];  
  location = [];  
  vacancy = [];  
  barchart = []; 

  
  constructor(private ReportServe: ReportService) { }

  ngOnInit(): void {
    this.ReportServe.getVacancyReport().subscribe((result: any) => {  
      result.forEach(x => {  
        this.location.push(x.Location);  
        this.vacancy.push(x.Vacancy);  
      });  
      this  
      this.barchart = new Chart('canvas', {  
        type: 'bar',  
        data: {  
          labels: this.location,  
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