import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserwizardComponent } from './userwizard.component';

describe('UserwizardComponent', () => {
  let component: UserwizardComponent;
  let fixture: ComponentFixture<UserwizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserwizardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserwizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
