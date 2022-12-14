import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVisitorlogComponent } from './view-visitorlog.component';

describe('ViewVisitorlogComponent', () => {
  let component: ViewVisitorlogComponent;
  let fixture: ComponentFixture<ViewVisitorlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVisitorlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewVisitorlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
