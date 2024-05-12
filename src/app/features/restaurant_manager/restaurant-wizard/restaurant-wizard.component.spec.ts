import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantWizardComponent } from './restaurant-wizard.component';

describe('RestaurantWizardComponent', () => {
  let component: RestaurantWizardComponent;
  let fixture: ComponentFixture<RestaurantWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantWizardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurantWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
