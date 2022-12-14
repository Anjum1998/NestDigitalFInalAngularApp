import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployLogComponent } from './employ-log.component';

describe('EmployLogComponent', () => {
  let component: EmployLogComponent;
  let fixture: ComponentFixture<EmployLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
