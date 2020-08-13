import { Component, OnInit } from '@angular/core';
import { JobapplicationService } from '../jobapplication.service';
import { Observable } from 'rxjs';
import { User } from '../user';
import * as fileSaver from 'file-saver';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  empDetails: User;
  username: string;
  mail: string;
  fullname: string;
  isError: boolean;
  imageToShow: any;
  errorCheck: boolean = false;
  changeText: boolean = false;
  fileUpload: File = null;
  imageForm: FormGroup;
  constructor(
    private rsvc: JobapplicationService,
    private tstr: ToastrService,
    private sanitizer: DomSanitizer,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.imageForm = this.fb.group({
      imageFile: [null, Validators.required],
    });
    this.getUsersDetails();
    this.getUserImage();
  }
  getUsersDetails() {
    this.rsvc.GetUserDetails().subscribe((emp) => {
      this.empDetails = emp;
      this.fullname = this.empDetails.Fullname;
      this.username = this.empDetails.UserName;
      this.mail = this.empDetails.UserEmail;
    });
  }
  getUserImage() {
    this.rsvc.GetUserImage().subscribe((data) => {
      const objectURL = URL.createObjectURL(data);
      const img = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      this.imageToShow = img
    },
      _error => this.errorCheck = true
    );
  }
  download() {
    this.rsvc.downloadFile().subscribe(
      (response) => {
        let blob: any = new Blob([response], { type: 'application/pdf' });
        // const url = window.URL.createObjectURL(blob);
        // window.open(url);
        fileSaver.saveAs(blob, 'resume.pdf');
      },
      (error: any) => {
        // console.log(error);
        this.tstr.error('You have not uploaded the resume', 'Resume Not Found');
      }
    );
  }
  handleImageUpload(file: FileList) {
    this.fileUpload = file.item(0);
  }
  submitDetails() {
    this.rsvc.uploadImage(this.fileUpload).subscribe((_data: any) => {
      this.tstr.success("Image Uploaded");
      this.getUserImage();
    },
      (_error: any) => alert('Sorry, Some Error Occurerd!')
    );
  }
}
