import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedjobsComponent } from './suggestedjobs.component';

describe('SuggestedjobsComponent', () => {
  let component: SuggestedjobsComponent;
  let fixture: ComponentFixture<SuggestedjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
