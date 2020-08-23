import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jobs } from 'src/app/jobs';
import { JobserviceService } from 'src/app/jobservice.service';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css'],
})
export class JoblistComponent implements OnInit {
  jobs: Jobs[];
  totalJobs: Number;
  ttlrecords: number;
  page: number = 1;
  filterVal: any;
  sort: any[] = [
    { id: '1', value: 'Ascending' },
    { id: '2', value: 'Descending' },
    { id: '3', value: 'ByDate' },
  ];
  sortVal: string = 'ByDate';
  constructor(private service: JobserviceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getJobs().subscribe((data) => {
      this.jobs = data;
      this.totalJobs = data.length;
      this.ttlrecords = data.length;
    });
  }
  capture(val: string) {
    this.sortVal = val;
  }
  getJobDetails(id: number) {
    this.router.navigate(['/job', btoa(JSON.stringify(id))]);
  }
}