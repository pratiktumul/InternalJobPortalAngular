import { Component, OnInit } from '@angular/core';
import { SuperadminService } from '../superadmin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-approveadmin',
  templateUrl: './approveadmin.component.html',
  styleUrls: ['./approveadmin.component.css']
})
export class ApproveadminComponent implements OnInit {
  adminsArray: any[];
  constructor(private sas: SuperadminService, private tstr: ToastrService) { }

  ngOnInit(): void {
    this.loadAllApplications();
  }
  loadAllApplications() {
    this.sas.getAllApplication().subscribe((data) => {
      this.adminsArray = data;
    });
  }
  onApprove(id: number) {
    const obj = {
      status: '3'
    }
    this.sas.approveUser(obj, id).subscribe(() => {
      this.loadAllApplications();
      this.tstr.success("Approved");
    });
  }
  onReject(id: number) {
    const obj = {
      status: '2'
    }
    this.sas.approveUser(obj, id).subscribe(() => {
      this.loadAllApplications();
      this.tstr.error("Rejected");
    });
  }
}
