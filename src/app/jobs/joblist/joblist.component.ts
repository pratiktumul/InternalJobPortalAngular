import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private service: JobserviceService) {}

  ngOnInit(): void {
    this.service.getJobs().subscribe((data) => {
      this.jobs = data;
      this.totalJobs = data.length;
      this.ttlrecords = data.length;
    });
  }
}
