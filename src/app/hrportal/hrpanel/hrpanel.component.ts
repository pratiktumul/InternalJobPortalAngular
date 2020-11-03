import { Component, OnInit } from '@angular/core';
import { HrService } from '../hr.service';
import { Jobapplication } from '../jobapplication';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hrpanel',
  templateUrl: './hrpanel.component.html',
  styleUrls: ['./hrpanel.component.css']
})
export class HrpanelComponent implements OnInit {
  JobApplications: Jobapplication[];
  totalRecord: number;
  filterVal: any;
  page: number = 1;
  skillFilter: any[] = [
    '.NET',
    'C#',
    'Web API',
    'SQL',
    'Vue JS',
    'Oracle',
    'Other MS technologies',
  ];
  skillVal: string = '';
 
  constructor(private hrService: HrService, private router: Router) { }

  ngOnInit(): void {
    this.hrService.getAllJobApplications().subscribe((data) => { this.JobApplications = data;});
  }
  capture(val: string) {
    this.skillVal = val;
    
  }
  ViewDetail(applicationId: number) {
    this.router.navigate(['/ApplicationDetails', btoa(JSON.stringify(applicationId))]);
  }
}