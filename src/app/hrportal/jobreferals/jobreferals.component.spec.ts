import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobreferalsComponent } from './jobreferals.component';

describe('JobreferalsComponent', () => {
  let component: JobreferalsComponent;
  let fixture: ComponentFixture<JobreferalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobreferalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobreferalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
