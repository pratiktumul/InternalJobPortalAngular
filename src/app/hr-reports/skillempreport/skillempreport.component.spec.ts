import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillempreportComponent } from './skillempreport.component';

describe('SkillempreportComponent', () => {
  let component: SkillempreportComponent;
  let fixture: ComponentFixture<SkillempreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillempreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillempreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
