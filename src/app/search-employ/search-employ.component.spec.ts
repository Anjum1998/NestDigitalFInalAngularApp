import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmployComponent } from './search-employ.component';

describe('SearchEmployComponent', () => {
  let component: SearchEmployComponent;
  let fixture: ComponentFixture<SearchEmployComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchEmployComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchEmployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
