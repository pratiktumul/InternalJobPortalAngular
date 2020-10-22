import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancybycompanyComponent } from './vacancybycompany.component';

describe('VacancybycompanyComponent', () => {
  let component: VacancybycompanyComponent;
  let fixture: ComponentFixture<VacancybycompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancybycompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancybycompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
