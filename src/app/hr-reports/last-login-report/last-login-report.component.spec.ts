import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastLoginReportComponent } from './last-login-report.component';

describe('LastLoginReportComponent', () => {
  let component: LastLoginReportComponent;
  let fixture: ComponentFixture<LastLoginReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastLoginReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastLoginReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
