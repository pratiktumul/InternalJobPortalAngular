import { Component, OnInit } from '@angular/core';
import { JobapplicationService } from '../jobapplication.service';
import { Observable } from 'rxjs';
import { User } from '../user';

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
  constructor(private rsvc: JobapplicationService) {}

  ngOnInit(): void {
    //   this.rsvc.GetUserDetails().subscribe(emp=>
    //     {
    //       this.username = emp.UserName;
    //       this.mail = emp.UserEmail;
    //       this.role = emp.UserRole;
    //       this.id = emp.UserId;
    //       console.table(emp);
    //     }
    //     );
  }
}
