import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { PasswordValidator } from './password.validator';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  userExists: boolean = false;

  constructor(
    private fb: FormBuilder,
    private rsvc: AuthService,
    private router: Router,
    private tstr: ToastrService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        UserName: ['', Validators.required],
        UserEmail: ['', Validators.required],
        UserPassword: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        Fullname: ['', Validators.required]
      },
      { validator: PasswordValidator }
    );
  }

  Roles = ['Admin', 'User', 'SuperAdmin'];
  
  submitDetails() {
    this.rsvc.registerUser(this.registerForm.value).subscribe(
      (_data) => {
        this.tstr.success("Registered Successfully","Congratulations");
        this.registerForm.reset();
        this.userExists = false;
        this.router.navigate(['/login']);
      },
      (_error) => {
        this.userExists = true;
      }
    );
  }

}
