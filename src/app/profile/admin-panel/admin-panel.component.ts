import { Component, OnInit } from '@angular/core';
import { AdminpanelService } from '../adminpanel.service';
import { Observable } from 'rxjs';
import { Jobs } from 'src/app/jobs';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  allJobs: Jobs[];
  jobForm: FormGroup;
  totalRecord: number;
  page: number = 1;
  constructor(
    private service: AdminpanelService,
    private tstr: ToastrService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.jobForm = this.fb.group({
      JobTitle: ['', Validators.required],
      CompanyName: ['', Validators.required],
      Location: ['', Validators.required],
      JobType: ['', Validators.required],
    });
    this.loadAllJobs();
  }

  loadAllJobs() {
    this.service.getAllJobs().subscribe((data) => {
      this.allJobs = data;
      this.totalRecord = data.length;
    });
  }

  addJob() {
    this.service.addNewJob(this.jobForm.value).subscribe(() => {
      this.resetAll();
      this.tstr.success('New Job Added Successfully');
      this.loadAllJobs();
    });
  }

  deleteJob(jobid: number) {
    this.service.deleteJobById(jobid).subscribe(() => {
      this.loadAllJobs();
      this.tstr.success('Deleted Successfully');
    });
  }

  resetAll(){
    this.jobForm.reset();
  }
}
