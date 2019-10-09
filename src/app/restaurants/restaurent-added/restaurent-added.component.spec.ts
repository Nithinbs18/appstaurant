import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentAddedComponent } from './restaurent-added.component';

describe('RestaurentAddedComponent', () => {
  let component: RestaurentAddedComponent;
  let fixture: ComponentFixture<RestaurentAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurentAddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurentAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
