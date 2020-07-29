import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalappliedjobsComponent } from './totalappliedjobs.component';

describe('TotalappliedjobsComponent', () => {
  let component: TotalappliedjobsComponent;
  let fixture: ComponentFixture<TotalappliedjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalappliedjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalappliedjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
