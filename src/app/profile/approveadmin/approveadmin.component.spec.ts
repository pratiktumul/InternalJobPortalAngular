import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveadminComponent } from './approveadmin.component';

describe('ApproveadminComponent', () => {
  let component: ApproveadminComponent;
  let fixture: ComponentFixture<ApproveadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
