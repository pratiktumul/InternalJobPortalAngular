import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoginError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private rsvc: AuthService,
    private tstr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      UserName: ['', Validators.required],
      UserPassword: ['', Validators.required],
    });
  }
  goToHome() {
    this.router.navigate(['/']);
  }
  Login() {
    const username = this.loginForm.get('UserName').value;
    const password = this.loginForm.get('UserPassword').value;
    this.rsvc.userLogin(username, password).subscribe(
      (data: any) => {
        localStorage.setItem('userToken', data.access_token);
        localStorage.setItem('role', data.role);
        localStorage.setItem('lastlogin', data.LastLogg);
        localStorage.setItem('userName', data.username);
        this.router.navigate(['/']);
      },
      (error: HttpErrorResponse) => {
        this.tstr.error(`${error.error.error_description}`, 'Login Failed');
      }
    );
  }
}
