import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { PasswordValidator } from './password.validator';
import { ToastrService } from 'ngx-toastr';

@Component({ 
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  userExists: boolean = false;
  unamePattern = "^[a-z0-9_-]{8,15}$";
  emailPattern = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  constructor(
    private fb: FormBuilder,
    private rsvc: AuthService,
    private router: Router,
    private tstr: ToastrService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        UserName: ['', Validators.required, Validators.pattern(this.unamePattern)],
        UserEmail: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        UserPassword: ['', Validators.required],
        RoleId: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        Fullname: ['', Validators.required]
      },
      { validator: PasswordValidator }
    );
  }

  Roles = [{ roleid: '1', role: 'Admin' }, { roleid: '2', role: 'User' },{ roleid: '4', role: 'HR' }];

  submitDetails() {
    this.rsvc.registerUser(this.registerForm.value).subscribe(
      (_data) => {
        this.tstr.success("Application Submitted Successfully", "Congratulations");
        this.registerForm.reset();
        this.userExists = false;
        this.router.navigate(['/login']);
      },
      (_error) => {
        this.userExists = true;
      }
    );
  }

  get UserEmail() {
    return this.registerForm.get('UserEmail');
  }

}