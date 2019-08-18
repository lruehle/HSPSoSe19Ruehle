import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewCoursCategoryComponent } from './overview-cours-category.component';

describe('OverviewCoursCategoryComponent', () => {
  let component: OverviewCoursCategoryComponent;
  let fixture: ComponentFixture<OverviewCoursCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewCoursCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewCoursCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
