import { Component, OnInit } from '@angular/core';
import { JobapplicationService } from '../jobapplication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-jobapplication',
  templateUrl: './jobapplication.component.html',
  styleUrls: ['./jobapplication.component.css'],
})
export class JobapplicationComponent implements OnInit {
  registerForm: FormGroup;
  fileUpload: File = null;

  constructor(
    private jobservice: JobapplicationService,
    private fb: FormBuilder,
    private tstr: ToastrService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      ename: ['', Validators.required],
      curLoc: ['', Validators.required],
      skill: ['', Validators.required],
      year: ['', Validators.required],
      month: ['', Validators.required],
      about: ['', [Validators.required, Validators.maxLength(250)]],
      project: ['', Validators.required],
      resumeFile: [null, Validators.required],
    });
  }
  Skills = [
    '.NET',
    'C#',
    'Web API',
    'SQL',
    'Vue JS',
    'Oracle',
    'Other MS Technologies',
  ];
  ExpYears = ['1', '2', '3', '4', '5'];
  ExpMonths = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  handleFileInput(file: FileList) {
    this.fileUpload = file.item(0);
  }
  submitDetails() {
    const name: string = this.registerForm.controls['ename'].value;
    const location: string = this.registerForm.controls['curLoc'].value;
    const skillSet: string[] = this.registerForm.controls['skill'].value;
    const skill: string = skillSet.join();
    const year: string = this.registerForm.controls['year'].value;
    const month: string = this.registerForm.controls['month'].value;
    const about: string = this.registerForm.controls['about'].value;
    const project: string = this.registerForm.controls['project'].value;
    console.log(this.registerForm.value);
    this.jobservice
      .AddEmployeeDetails(
        name,
        location,
        skill,
        year,
        month,
        about,
        project,
        this.fileUpload
      )
      .subscribe(
        (_data: any) => {
          this.tstr.success("Job Application Submitted Successfully", "congratulation");
          this.registerForm.reset();
        },
        (_error: any) => alert('Sorry, Some Error Occurerd!')
      );
  }
}