import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  data: any;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      location: [Validators.required],
    });
  }
  onSubmit() {
    this.data = this.form.value;
    console.log(this.data);
    this.router.navigate(['/jobsearch'], {
      queryParams: { data: btoa(JSON.stringify(this.data)) },
    });
  }
}
