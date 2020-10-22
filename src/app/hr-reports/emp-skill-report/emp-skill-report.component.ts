import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Chart } from 'chart.js';
import { ToastrService } from 'ngx-toastr';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-emp-skill-report',
  templateUrl: './emp-skill-report.component.html',
  styleUrls: ['./emp-skill-report.component.css']
})
export class EmpSkillReportComponent implements OnInit {
  isNavbarCollapsed: boolean = true;
  userName: string;
  currDate: Date
  SkillLevel = [];
  Skillname: any = [];
  EnterEmpId: FormGroup;
  empty: any = [];
  public radarChart: any = [];
  heading: string = 'Employee Skill Report';
  isTrue: boolean = true;

  constructor(private _rs: ReportService, private fb: FormBuilder, private tstr: ToastrService) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
    this.currDate = new Date();
    this.EnterEmpId = this.fb.group(
      {
        EmpId: ['', Validators.required],
      }
    );
  }

  getEmployeeSkillLevel() {
    this.SkillLevel = [];
    this.Skillname = [];
    const empid: number = this.EnterEmpId.controls['EmpId'].value;

    this._rs.getEmployeeSkill(empid).subscribe((result: any) => {
      if (result.length == 0) {
        this.heading = 'No Record Found';
        this.isTrue = false;
        if (this.radarChart) this.radarChart.clear();
      }
      else {
        this.isTrue = true;
        this.heading = 'Employee Skill Report';
        result.forEach(x => {
          this.SkillLevel.push(x.SkillLevel);
          this.Skillname.push(x.SkillSetName);
        });
        
        this.radarChart = new Chart("radar_chart", {
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
      }
    });
  }
}