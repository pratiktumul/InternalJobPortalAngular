import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminpanelService } from '../adminpanel.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addjobs',
  templateUrl: './addjobs.component.html',
  styleUrls: ['./addjobs.component.css']
})
export class AddjobsComponent implements OnInit {
  jobForm: FormGroup;
  userName: string;
  constructor(private fb: FormBuilder, private service: AdminpanelService, private tstr: ToastrService,) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
    this.jobForm = this.fb.group({
      JobTitle: ['', Validators.required],
      CompanyName: ['', Validators.required],
      Location: ['', Validators.required],
      JobType: ['', Validators.required],
      JobDescription: ['', Validators.required],
      Salary: ['', Validators.required],
      LastApplyDate: [Validators.required],
      Vacancy: ['', Validators.required]
    });
  }
  companyName = ["Microsoft", "Apple", "Dell", "IBM", "SAP"];
  Location = ["Bangalore", "Manila", "Carmel"];
  JobType = ["Full Time", "Part Time", "Freelancer", "Remote"];
  addJob() {
    if (confirm('Add New Job?')) {
      this.service.addNewJob(this.jobForm.value).subscribe(() => {
        this.resetAll();
        this.tstr.success('New Job Added Successfully');
      });
    }
  }
  resetAll() {
    if (confirm('Are you sure you want to reset the form?')) {
    this.jobForm.reset();
    }
  }
}
