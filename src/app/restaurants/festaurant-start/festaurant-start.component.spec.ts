import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestaurantStartComponent } from './festaurant-start.component';

describe('FestaurantStartComponent', () => {
  let component: FestaurantStartComponent;
  let fixture: ComponentFixture<FestaurantStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestaurantStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestaurantStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
