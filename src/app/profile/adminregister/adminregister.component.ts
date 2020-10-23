import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';
import { PasswordValidator } from 'src/app/auth/register/password.validator';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {

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
        UserName: ['', Validators.required],
        UserEmail: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        UserPassword: ['', Validators.required],
        RoleId: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        Fullname: ['', Validators.required],
        EmpId: ['', Validators.required]
      },
      { validator: PasswordValidator }
    );
  }

  Roles = [{ roleid: '1', role: 'Admin' }, { roleid: '4', role: 'HR' }];

  CheckDomain(email: string) {
    let domain = 'gyansys.com';
    let indexOfAt = email.indexOf('@');
    let extractDomain = email.substring(indexOfAt + 1);
    return domain == extractDomain;
  }

  submitDetails() {
    const email = this.registerForm.get('UserEmail').value.toString();
    if (this.CheckDomain(email)) {
      
      this.rsvc.registerAdminHR(this.registerForm.value).subscribe(
        (_data) => {
          this.tstr.success("Registration Done Successfully", "Congratulations");
          this.registerForm.reset();
          this.userExists = false;
        },
        (_error) => {
          this.userExists = true;
        }
      );
    }
    else {
      this.tstr.error("Please Use GyanSys Email Only");
    }
  }

  get UserEmail() {
    return this.registerForm.get('UserEmail');
  }


}
