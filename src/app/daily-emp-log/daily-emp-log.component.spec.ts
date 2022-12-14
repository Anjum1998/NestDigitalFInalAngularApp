import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyEmpLogComponent } from './daily-emp-log.component';

describe('DailyEmpLogComponent', () => {
  let component: DailyEmpLogComponent;
  let fixture: ComponentFixture<DailyEmpLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyEmpLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyEmpLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
