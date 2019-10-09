import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentListComponent } from './restaurent-list.component';

describe('RestaurentListComponent', () => {
  let component: RestaurentListComponent;
  let fixture: ComponentFixture<RestaurentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
