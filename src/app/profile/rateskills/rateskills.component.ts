import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { JobapplicationService } from '../jobapplication.service';
import { Skillrate } from './skillrate';

@Component({
  selector: 'app-rateskills',
  templateUrl: './rateskills.component.html',
  styleUrls: ['./rateskills.component.css']
})
export class RateskillsComponent implements OnInit {

  SubmitSkillLevel: FormGroup;
  lastLogin: string;
  userName: string;
  rateskillModel = new Skillrate();
  dataarray=[];
  
  newskillsarray=[];
 
  isNavbarCollapsed:boolean = true;
  constructor(
    //private dashboardService: DashboardService,
    private jobservice: JobapplicationService,
    private fb: FormBuilder,
    private tstr: ToastrService,
    private changeDetector : ChangeDetectorRef
    ) { }
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
  Skills = [
    { name: ".NET", id: 1 },
    { name: "C#", id: 2 },
    { name: "Web API", id: 3 },
    { name: "SQL", id: 4 },
    { name: "Vue JS", id: 5 },
    { name: "Oracle", id: 6 },
    { name: "Other MS Technologies", id: 7 },
   
  ];
  Rateing = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10'  ];

  ngOnInit(): void {
    this.SubmitSkillLevel = this.fb.group({
      EmpId: ['', Validators.required],
      skill_set_id: ['', Validators.required],
      skill_level: ['', Validators.required],
      

    });
    this.rateskillModel= new Skillrate()
    this.dataarray.push(this.rateskillModel);
    this.lastLogin = localStorage.getItem('lastlogin');
    this.userName = localStorage.getItem('userName');
  }
  addRow()
  {
    this.rateskillModel = new Skillrate()
    this.dataarray.push(this.rateskillModel);
  }
  removeRow(index){
   this.dataarray.splice(index,1);
  }
 
  SubmitSkillLevelForm(){
    //console.log(this.dataarray);
    this.dataarray.forEach(element => {
      //element = this.dataarray;
      this.jobservice.addSkillLevel(element).subscribe(
        (_data: any) => {
          this.tstr.success("Submitted Succesfully", "Great");
          this.SubmitSkillLevel.reset(); 
        },
        (_error: HttpErrorResponse) => {
          this.tstr.error("There was an error.");
        }
      );
    }); 
 

  }

}
