import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { JobService } from '../job.service';
import { JobserviceService } from 'src/app/jobservice.service';
import { Job } from '../job';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-jobdetail',
  templateUrl: './jobdetail.component.html',
  styleUrls: ['./jobdetail.component.css']
})
export class JobdetailComponent implements OnInit {
  JobId: number;
  JobDetails: Job;
  constructor(public router: Router, private route: ActivatedRoute, public auth: AuthService, private js: JobService, public job: JobserviceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = parseInt(JSON.parse(atob(params.get('id'))));
      this.JobId = id;
      this.js.getJobById(this.JobId).subscribe(
        (data: Job) => {
          this.JobDetails = data;
        }
      );
    });
  }
  goToApplication() {
    let id = this.JobId;
    this.router.navigate(['applicationform', btoa(JSON.stringify(id))])
  }
  goToRefApplication() {
    let id = this.JobId;
    this.router.navigate(['referraljobapplication', btoa(JSON.stringify(id))])
  }
}