import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSkillReportComponent } from './employee-skill-report.component';

describe('EmployeeSkillReportComponent', () => {
  let component: EmployeeSkillReportComponent;
  let fixture: ComponentFixture<EmployeeSkillReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeSkillReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSkillReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
