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
  constructor(private service: JobserviceService) {}

  ngOnInit(): void {
    this.service.getJobs().subscribe((data) => {
      this.jobs = data;
      this.totalJobs = data.length;
      console.log(this.jobs);
      // console.log(data);
    });
  }
}
