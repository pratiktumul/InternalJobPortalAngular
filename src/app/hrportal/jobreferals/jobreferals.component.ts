import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HrService } from '../hr.service';

@Component({
  selector: 'app-jobreferals',
  templateUrl: './jobreferals.component.html',
  styleUrls: ['./jobreferals.component.css']
})
export class JobreferalsComponent implements OnInit {
  totalRecord: number;
  page: number = 1;
  referalData: any = [];
  isDisplayed: boolean = true;
  emailForm: FormGroup;
  constructor(private _hr: HrService, private fb: FormBuilder, private tstr: ToastrService) { }

  ngOnInit(): void {
    this.getAllReferals();
    this.emailForm = this.fb.group({
      To: ['', Validators.required],
      Subject: ['', Validators.required],
      Body: ['', Validators.required],
      From: ['', Validators.required],
    });
  }

  getAllReferals() {
    this._hr.getJobReferals().subscribe((data) => {
      this.referalData = data;
    });
  }

  sendEmail() {
    console.log(this.emailForm.value);
    this.emailForm.reset();
  }

  showForm() {
    if (this.isDisplayed) {
      this.isDisplayed = false;
    } else {
      this.isDisplayed = true;
    }
  }

  Delete(id: number) {
    if (confirm('Add New Job?')) {
      this._hr.deleteJobReferal(id).subscribe((data) => {
        this.getAllReferals();
        this.tstr.success('Deleted Successfully');
      });
    }
  }

  resetAll() {
    if (confirm('Are you sure you want to reset the form?')) {
      this.emailForm.reset();
    }
  }
}
