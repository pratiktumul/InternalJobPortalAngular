import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Chart from 'chart.js';
import { ReportService } from '../report.service';


@Component({
  selector: 'app-employee-skill-report',
  templateUrl: './employee-skill-report.component.html',
  styleUrls: ['./employee-skill-report.component.css']
})
export class EmployeeSkillReportComponent implements OnInit {
  isNavbarCollapsed: boolean = true;
  userName: string;
  currDate: Date
  myRadarChart: any = []
  SkillLevel = [];
  Skillname: any = [];
  EnterEmpId: FormGroup;
  empty: any = [];
  constructor(private ReportServe: ReportService,
    private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
    this.currDate = new Date();

    this.EnterEmpId = this.fb.group(
      {
        EmpId: ['', Validators.required],

      }
    );
    this.getEmployeeSkillLevel();
  }
  getEmployeeSkillLevel() {
  const empid: number = this.EnterEmpId.controls['EmpId'].value;
    this.ReportServe.getEmployeeSkillLevelService(empid).subscribe((result: any) => {
      result.forEach(x => {
        this.SkillLevel.push(x.SkillLevel);
        this.Skillname.push(x.SkillSetName);

      });
      console.log(this.SkillLevel);
      console.log(this.Skillname);

      this
      this.myRadarChart = new Chart("radar_chart", {
        type: 'radar',
        data:
        {
          labels: this.Skillname,
          datasets: [{
            data: this.SkillLevel,
            label: 'Employee Skill sets',
            borderColor: ['rgba(255, 99, 132, 1)',],
            backgroundColor: ['rgba(255, 206, 86, 0.2)']
          }]
        },
        options: {
          scale: {
            angleLines: {
              display: true
            },
            ticks: {
              suggestedMin: 1,
              suggestedMax: 10
            }
          }
        },
      });
    });




  }
  removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });
    chart.update();
  }

}

