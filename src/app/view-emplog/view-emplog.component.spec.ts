import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmplogComponent } from './view-emplog.component';

describe('ViewEmplogComponent', () => {
  let component: ViewEmplogComponent;
  let fixture: ComponentFixture<ViewEmplogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmplogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmplogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
