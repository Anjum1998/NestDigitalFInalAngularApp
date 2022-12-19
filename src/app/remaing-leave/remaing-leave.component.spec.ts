import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemaingLeaveComponent } from './remaing-leave.component';

describe('RemaingLeaveComponent', () => {
  let component: RemaingLeaveComponent;
  let fixture: ComponentFixture<RemaingLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemaingLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemaingLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
