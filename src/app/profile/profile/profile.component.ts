import { Component, OnInit } from '@angular/core';
import { JobapplicationService } from '../jobapplication.service';
import { Observable } from 'rxjs';
import { User } from '../user';
import * as fileSaver from 'file-saver';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  empDetails: Observable<User>;
  username: string;
  mail: string;
  role: string;
  id: number;
  fullname: string;
  isError: boolean;
  constructor(
    private rsvc: JobapplicationService,
    private tstr: ToastrService
  ) {}

  ngOnInit(): void {
    this.rsvc.GetUserDetails().subscribe((emp) => {
      console.table(emp);
      this.username = emp.UserName;
      this.mail = emp.UserEmail;
      this.role = emp.UserRole;
      this.id = emp.UserId;
      this.fullname = emp.Fullname;
    });
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
}
