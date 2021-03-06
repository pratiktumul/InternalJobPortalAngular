import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jobs } from '../jobs';
import { JobserviceService } from '../jobservice.service';

@Component({
  selector: 'app-jobsearch',
  templateUrl: './jobsearch.component.html',
  styleUrls: ['./jobsearch.component.css'],
})
export class JobsearchComponent implements OnInit {
  data: any;
  joblist: Jobs[];
  time: number;
  totalJobs: number;
  ttlrecords: number;
  page: number = 1;
  errorMessage: boolean;
  constructor(
    private route: ActivatedRoute,
    private serve: JobserviceService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((param) => {
      this.data = JSON.parse(atob(param.data));
      console.log(this.data);
      this.serve
        .getJobsBySearch(this.data.title, this.data.location)
        .subscribe((data) => {
          this.joblist = data;
          this.totalJobs = data.length;
          this.ttlrecords = data.length;
        },
        (error) => { this.errorMessage = true; });
    });
  }
}
