import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Observable } from 'rxjs';
import { AppliedJobsModel } from './applied-jobs-model';

@Component({
  selector: 'app-totalappliedjobs',
  templateUrl: './totalappliedjobs.component.html',
  styleUrls: ['./totalappliedjobs.component.css']
})
export class TotalappliedjobsComponent implements OnInit {
  jobApplied: AppliedJobsModel[];
  lastLogin: string;
  userName: string;
  ttlrecords: number;
  page: number = 1;
  errorMessage: boolean = false;
  isNavbarCollapsed: boolean = true;
  constructor(private dashboard: DashboardService) { }

  ngOnInit(): void {
    this.lastLogin = localStorage.getItem('lastlogin');
    this.userName = localStorage.getItem('userName');
    this.lastLogin = this.lastLogin.split(' ')[0];
    this.getAppliedJobs();
  }
  getAppliedJobs() {
    const name: string = localStorage.getItem('userName');
    this.dashboard.getAppliedJobList(name).subscribe((data) => {
      this.jobApplied = data;
    },
      error => this.errorMessage = true);
  }
}