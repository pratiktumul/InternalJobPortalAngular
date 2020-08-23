import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { JobService } from '../job.service';
import { JobserviceService } from 'src/app/jobservice.service';

@Component({
  selector: 'app-jobdetail',
  templateUrl: './jobdetail.component.html',
  styleUrls: ['./jobdetail.component.css']
})
export class JobdetailComponent implements OnInit {
  JobId: number;
  CompanyName: string;
  jobTitle: string;
  JobDescription: string;
  Location: string;
  PostedDate: Date;
  JobType:string;
  constructor(private router: Router, private route: ActivatedRoute, private js: JobService, public job: JobserviceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = parseInt(JSON.parse(atob(params.get('id'))));
      this.JobId = id;
      this.js.getJobById(this.JobId).subscribe(
        (data) => {
          this.jobTitle = data.JobTitle;
          this.CompanyName = data.CompanyName;
          this.JobDescription = data.JobDescription;
          this.Location = data.Location;
          this.PostedDate = data.PostedDate;
          this.JobType = data.JobType;
        }
      );
    });
  }
  goToApplication(){
    let id = this.JobId;
    this.router.navigate(['applicationform', btoa(JSON.stringify(id))])
  }
}