import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantNewCommentComponent } from './restaurant-new-comment.component';

describe('RestaurantNewCommentComponent', () => {
  let component: RestaurantNewCommentComponent;
  let fixture: ComponentFixture<RestaurantNewCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantNewCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantNewCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
