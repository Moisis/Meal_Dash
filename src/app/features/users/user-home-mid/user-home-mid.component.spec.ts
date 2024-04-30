import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeMidComponent } from './user-home-mid.component';

describe('UserHomeMidComponent', () => {
  let component: UserHomeMidComponent;
  let fixture: ComponentFixture<UserHomeMidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserHomeMidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserHomeMidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
