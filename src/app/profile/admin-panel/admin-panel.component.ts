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

  totalRecord: number;
  page: number = 1;
  sort: any[] = [
    { id: '1', value: 'Ascending' },
    { id: '2', value: 'Descending' },
    { id: '3', value: 'ByDate' },
  ];
  sortVal: string = 'ByDate';
  filterVal: any;
  userName: string;

  constructor(
    private service: AdminpanelService,
    private tstr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.loadAllJobs();
  }

  loadAllJobs() {
    this.userName = localStorage.getItem('userName');
    this.service.getAllJobs().subscribe((data) => {
      this.allJobs = data;
      this.totalRecord = data.length;
    });
  }

  deleteJob(jobid: number) {
    this.service.deleteJobById(jobid).subscribe(() => {
      this.loadAllJobs();
      this.tstr.success('Deleted Successfully');
    });
  }

  capture(val: string) {
    this.sortVal = val;
    console.log(this.sortVal);
  }
}
