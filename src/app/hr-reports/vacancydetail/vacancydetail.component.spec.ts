import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancydetailComponent } from './vacancydetail.component';

describe('VacancydetailComponent', () => {
  let component: VacancydetailComponent;
  let fixture: ComponentFixture<VacancydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
