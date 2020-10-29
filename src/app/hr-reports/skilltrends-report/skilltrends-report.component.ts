import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-skilltrends-report',
  templateUrl: './skilltrends-report.component.html',
  styleUrls: ['./skilltrends-report.component.css']
})
export class SkilltrendsReportComponent implements OnInit {
  isNavbarCollapsed: boolean = true;
  userName: string;
  currDate: Date
  //location = [];
  skills = [];
  skillTrendsChart: any = [];
  count = [];
  constructor(private _rs: ReportService) { }

  ngOnInit(): void {
    this.getSkillTrendReport();
  }
  getSkillTrendReport() {
    this.userName = localStorage.getItem('userName');
    this.currDate = new Date();
    this._rs.getTrendingSkills().subscribe((res) => {
      console.log(res);
      res.forEach(x => {
        this.skills.push(x.SkillName);
        this.count.push(x.Count);
      })
      
      this.skillTrendsChart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.skills,
          datasets: [{
            data: this.count,
            label: "Skill",
            borderColor: "#c45850",
            fill: false
          }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Skill wise trend'
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