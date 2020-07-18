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
  constructor(
    public auth: AuthService,
    private router: Router,
    public job: JobserviceService
  ) {}

  ngOnInit(): void {}

  logout() {
    localStorage.removeItem('userToken');
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
