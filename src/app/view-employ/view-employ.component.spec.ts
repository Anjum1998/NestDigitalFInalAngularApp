import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployComponent } from './view-employ.component';

describe('ViewEmployComponent', () => {
  let component: ViewEmployComponent;
  let fixture: ComponentFixture<ViewEmployComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
