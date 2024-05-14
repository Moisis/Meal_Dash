import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantWizard2Component } from './restaurant-wizard2.component';

describe('RestaurantWizard2Component', () => {
  let component: RestaurantWizard2Component;
  let fixture: ComponentFixture<RestaurantWizard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantWizard2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurantWizard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
