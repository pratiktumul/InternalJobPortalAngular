import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilltrendsReportComponent } from './skilltrends-report.component';

describe('SkilltrendsReportComponent', () => {
  let component: SkilltrendsReportComponent;
  let fixture: ComponentFixture<SkilltrendsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkilltrendsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilltrendsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
