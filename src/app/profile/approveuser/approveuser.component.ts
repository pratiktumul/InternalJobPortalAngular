import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminpanelService } from '../adminpanel.service';
import { Observable } from 'rxjs';
import { User } from '../user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-approveuser',
  templateUrl: './approveuser.component.html',
  styleUrls: ['./approveuser.component.css']
})
export class ApproveuserComponent implements OnInit {
  usersArray: any[];
  constructor(private asp: AdminpanelService,
    private tstr: ToastrService) { }
  ngOnInit(): void {
    this.loadAllApplications();
  }
  loadAllApplications() {
    this.asp.getAllApplication().subscribe((data) => {
      this.usersArray = data;
    });
  }
  onApprove(id: number) {
    const obj = {
      status: '3'
    }
    this.asp.approveUser(obj, id).subscribe(() => {
      this.loadAllApplications();
      this.tstr.success("Approved");
    });
  }
  onReject(id: number) {
    const obj = {
      status: '2'
    }
    this.asp.approveUser(obj, id).subscribe(() => {
      this.loadAllApplications();
      this.tstr.error("Rejected");
    });
  }
}