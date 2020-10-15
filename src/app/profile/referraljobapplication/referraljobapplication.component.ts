import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JobService } from 'src/app/jobs/job.service';
import { JobapplicationService } from '../jobapplication.service';

@Component({
  selector: 'app-referraljobapplication',
  templateUrl: './referraljobapplication.component.html',
  styleUrls: ['./referraljobapplication.component.css']
})
export class ReferraljobapplicationComponent implements OnInit {
  registerRefForm: FormGroup;

  constructor(private fb: FormBuilder,
    // private fb: FormBuilder,
    private tstr: ToastrService,
    private route: ActivatedRoute,
    private js: JobService,
    private jobservice: JobapplicationService,) { }

  ngOnInit(): void {
    this.registerRefForm = this.fb.group({
      pName: ['', Validators.required],
      pEmailId: ['', Validators.required],
      pPhoneNo: ['', Validators.required],
      pJobName: ['', Validators.required],
      pLocation: ['', Validators.required],
      pSkillSet: ['', Validators.required]

    });
  }
  //This method is for calling the service
  submitReferralDetails() {
    if (confirm('Are you sure you want to submit?')) {
      this.jobservice
        .SubmitRefApplication(
          this.registerRefForm.value
        )
        .subscribe(
          (_data: any) => {
            this.tstr.success("Job Application Submitted Successfully", "congratulation");
            this.registerRefForm.reset();
          },
          (_error: HttpErrorResponse) => {
            this.tstr.error('You have already applied for this Job');
          }
        );
    }
  }
} 