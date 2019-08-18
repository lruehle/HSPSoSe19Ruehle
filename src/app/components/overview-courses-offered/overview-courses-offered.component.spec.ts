import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewCoursesOfferedComponent } from './overview-courses-offered.component';

describe('OverviewCoursesOfferedComponent', () => {
  let component: OverviewCoursesOfferedComponent;
  let fixture: ComponentFixture<OverviewCoursesOfferedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewCoursesOfferedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewCoursesOfferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
