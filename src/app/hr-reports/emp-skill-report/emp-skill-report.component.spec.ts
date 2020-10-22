import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSkillReportComponent } from './emp-skill-report.component';

describe('EmpSkillReportComponent', () => {
  let component: EmpSkillReportComponent;
  let fixture: ComponentFixture<EmpSkillReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpSkillReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpSkillReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
