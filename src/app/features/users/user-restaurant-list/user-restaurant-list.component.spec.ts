import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRestaurantListComponent } from './user-restaurant-list.component';

describe('UserRestaurantListComponent', () => {
  let component: UserRestaurantListComponent;
  let fixture: ComponentFixture<UserRestaurantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserRestaurantListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserRestaurantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
