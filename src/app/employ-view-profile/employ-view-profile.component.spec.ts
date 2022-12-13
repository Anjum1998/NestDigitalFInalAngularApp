import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployViewProfileComponent } from './employ-view-profile.component';

describe('EmployViewProfileComponent', () => {
  let component: EmployViewProfileComponent;
  let fixture: ComponentFixture<EmployViewProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployViewProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
