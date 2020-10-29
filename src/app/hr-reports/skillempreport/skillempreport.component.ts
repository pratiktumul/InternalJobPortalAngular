import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-skillempreport',
  templateUrl: './skillempreport.component.html',
  styleUrls: ['./skillempreport.component.css']
})
export class SkillempreportComponent implements OnInit {
  isNavbarCollapsed: boolean = true;
  userName: string;
  currDate: Date
  skills = [];
  skillEmpChart: any = [];
  EmpCount = [];
  constructor(private _rs: ReportService) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
    this.currDate = new Date();
    this.getSkillEmpreport();
  }

  getSkillEmpreport() {
    this._rs.getSkillEmpReport().subscribe((res) => {
      console.log(res);
      res.forEach(data => {
        
        this.skills.push(data.Skills);
        this.EmpCount.push(data.EmpCount);
      })
    
    this.skillEmpChart = new Chart("canvas", {
      type: 'doughnut',
      data: {
        datasets:
          [{
            data: this.EmpCount,
            backgroundColor: ['rgba(255,192,203)', 'rgba(243, 156, 18, 1)', 'rgba(82, 179, 217, 1)', 'rgba(41, 241, 195, 1)']
          }],
        labels: this.skills
      }
    });
  });
  }
}