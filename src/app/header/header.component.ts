import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { JobserviceService } from '../jobservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  //UserName:string;
  constructor(
    public auth: AuthService,
    private router: Router,
    public job: JobserviceService
  ) {
    //this.UserName = localStorage.getItem('userName');
  }

  ngOnInit(): void {
    // if (localStorage.getItem('userToken') != null) {
    //   this.auth.getUserClaims().subscribe((data) => {
    //     // console.log(data.UserName);
    //     this.userClaim = data;
    //   });
    // }
  }

  logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
