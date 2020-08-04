import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-suggestedjobs',
  templateUrl: './suggestedjobs.component.html',
  styleUrls: ['./suggestedjobs.component.css']
})
export class SuggestedjobsComponent implements OnInit {
  lastLogin: string;
  userName: string;
  suggestedJobs: any[];
  ttlrecords: number;
  page: number = 1;
  constructor(private _udsv: DashboardService) { }

  ngOnInit(): void {
    this.lastLogin = localStorage.getItem('lastlogin');
    this.userName = localStorage.getItem('userName');
    this._udsv.getSuggestedJobs().subscribe(data=>this.suggestedJobs = data);
  }

}
