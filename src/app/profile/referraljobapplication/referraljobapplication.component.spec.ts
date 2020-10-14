import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferraljobapplicationComponent } from './referraljobapplication.component';

describe('ReferraljobapplicationComponent', () => {
  let component: ReferraljobapplicationComponent;
  let fixture: ComponentFixture<ReferraljobapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferraljobapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferraljobapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
