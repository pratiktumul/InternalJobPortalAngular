import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  lastLogin: string;
  userName: string;
  ttlJobs: number;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getAppliedJobs().subscribe((data) => {
      this.ttlJobs = data.totalJobs;
    });
    this.lastLogin = localStorage.getItem('lastlogin');
    this.userName = localStorage.getItem('userName');

  }

  getJobs() {
    alert("Working");
  }

}
