import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpApplicationTrackReportComponent } from './emp-application-track-report.component';

describe('EmpApplicationTrackReportComponent', () => {
  let component: EmpApplicationTrackReportComponent;
  let fixture: ComponentFixture<EmpApplicationTrackReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpApplicationTrackReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpApplicationTrackReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
