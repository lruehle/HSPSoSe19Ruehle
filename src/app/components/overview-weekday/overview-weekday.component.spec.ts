import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewWeekdayComponent } from './overview-weekday.component';

describe('OverviewWeekdayComponent', () => {
  let component: OverviewWeekdayComponent;
  let fixture: ComponentFixture<OverviewWeekdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewWeekdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewWeekdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
