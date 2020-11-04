import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JobreferalsComponent } from 'src/app/hrportal/jobreferals/jobreferals.component';
import { JobService } from 'src/app/jobs/job.service';
import { JobapplicationService } from '../jobapplication.service';
import { Referaljobmodel } from '../referaljobmodel';

@Component({
  selector: 'app-referraljobapplication',
  templateUrl: './referraljobapplication.component.html',
  styleUrls: ['./referraljobapplication.component.css']
})
export class ReferraljobapplicationComponent implements OnInit {
  registerRefForm: FormGroup;
  JobId: number;
  constructor(private fb: FormBuilder,
    // private fb: FormBuilder,
    private tstr: ToastrService,
    private route: ActivatedRoute,
    private js: JobService,
    private jobservice: JobapplicationService,) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = parseInt(JSON.parse(atob(params.get('id'))));
      this.JobId = id;
    });
    this.registerRefForm = this.fb.group({
      pName: ['', Validators.required],
      pEmailId: ['', Validators.required],
      pPhoneNo: ['', Validators.required],
      pJobName: ['', Validators.required],
      pLocation: ['', Validators.required],
      pSkillSet: ['', Validators.required]
    });
    this.registerRefForm.controls['pJobName'].disable();
    this.registerRefForm.controls['pLocation'].disable();
    this.registerRefForm.controls['pSkillSet'].disable();
    this.jobservice.GetJobDetailsReferral(this.JobId).subscribe((data) => {
      this.registerRefForm.controls['pJobName'].setValue(data.JobTitle);
      this.registerRefForm.controls['pLocation'].setValue(data.Location);
      this.registerRefForm.controls['pSkillSet'].setValue(data.Description);
    });
  }
  //This method is for calling the service
  submitReferralDetails() {
    if (confirm('Are you sure you want to submit?')) {
      let modelObj = {
        pEmailId: this.registerRefForm.controls['pEmailId'].value.toString(),
        pJobName: this.registerRefForm.controls['pJobName'].value.toString(),
        pPhoneNo: this.registerRefForm.controls['pPhoneNo'].value.toString(),
        pLocation: this.registerRefForm.controls['pLocation'].value.toString(),
        pSkillSet: this.registerRefForm.controls['pSkillSet'].value.toString(),
        pName: this.registerRefForm.controls['pName'].value.toString(),
        JobId: this.JobId
      }
      this.jobservice
        .SubmitRefApplication(
          modelObj
        )
        .subscribe(
          (_data: any) => {
            this.tstr.success("Job Referal Submitted Successfully", "congratulation");
            this.registerRefForm.reset();
          },
        );
    }
  }
} 