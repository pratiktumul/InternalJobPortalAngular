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

  constructor(private service: JobserviceService) {}

  ngOnInit(): void {
    this.service.getJobs().subscribe((data) => {
      this.jobs = data;
      console.log(this.jobs);
      // console.log(data);
    });
  }
}
