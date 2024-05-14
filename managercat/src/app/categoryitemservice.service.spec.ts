import { TestBed } from '@angular/core/testing';

import { CategoryitemserviceService } from './categoryitemservice.service';

describe('CategoryitemserviceService', () => {
  let service: CategoryitemserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryitemserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
