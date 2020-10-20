import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateskillsComponent } from './rateskills.component';

describe('RateskillsComponent', () => {
  let component: RateskillsComponent;
  let fixture: ComponentFixture<RateskillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateskillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
