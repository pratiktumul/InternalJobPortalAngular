import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HrService } from '../hr.service';
import { Applicationdetail } from '../applicationdetail';
import { JobapplicationService } from 'src/app/profile/jobapplication.service';
import { DomSanitizer } from '@angular/platform-browser';
import * as fileSaver from 'file-saver';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-applicationdetail',
  templateUrl: './applicationdetail.component.html',
  styleUrls: ['./applicationdetail.component.css']
})
export class ApplicationdetailComponent implements OnInit {
  data: any;
  applicationId: number;
  applicationDetails: Applicationdetail
  skills: string[];
  imageToShow: any;
  errorCheck: boolean = false;
  userId: number;
  approvalForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hrService: HrService,
    private rsvc: JobapplicationService,
    private sanitizer: DomSanitizer,
    private tstr: ToastrService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = parseInt(JSON.parse(atob(params.get('applicationId'))));
      this.applicationId = id;
    });
    this.approvalForm = this.fb.group(
      {
        InterviewDate: ['', Validators.required]
      }
    );
    this.loadAllApplications();
  }

  loadAllApplications() {
    this.hrService.getApplicationDetails(this.applicationId).subscribe((data) => {
      this.applicationDetails = data;
      this.userId = this.applicationDetails.UserId;
      this.getUserImage(this.userId);
      this.skills = this.applicationDetails.Skill.split(",");
    });
  }

  getUserImage(id: number) {
    this.rsvc.GetUserImageById(id).subscribe((data) => {
      const objectURL = URL.createObjectURL(data);
      const img = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      this.imageToShow = img
    },
      _error => this.errorCheck = true
    );
  }

  downloadResume() {
    this.hrService.downloadFile(this.applicationId).subscribe((response) => {
      let blob: any = new Blob([response], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
      // fileSaver.saveAs(blob, 'resume.pdf');
    },
      (error: any) => {
        this.tstr.error('You have not uploaded the resume', 'Resume Not Found');
      });
  }

  scheduleInterview() {
    let interviewSlot = this.approvalForm.controls['InterviewDate'].value;
    console.log(interviewSlot);
    const obj = {
      Status: '3',
      InterviewDate: interviewSlot
    }
    this.hrService.updateApplicationStatus(this.applicationId, obj).subscribe(() => {
      this.tstr.success("Approved");
      this.router.navigate(['/HRPanel']);
      this.loadAllApplications();
    });
  }
  rejectApplication() {
    const obj = {
      Status: '2',
      InterviewDate: null
    }
    this.hrService.updateApplicationStatus(this.applicationId, obj).subscribe(() => {
      this.tstr.success("Rejected");this.router.navigate(['/HRPanel']);
      this.loadAllApplications();
    });
  }
}