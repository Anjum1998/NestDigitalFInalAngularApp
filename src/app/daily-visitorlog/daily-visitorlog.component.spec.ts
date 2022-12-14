import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyVisitorlogComponent } from './daily-visitorlog.component';

describe('DailyVisitorlogComponent', () => {
  let component: DailyVisitorlogComponent;
  let fixture: ComponentFixture<DailyVisitorlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyVisitorlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyVisitorlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
