import { TestBed } from '@angular/core/testing';

import { CustomerSelectorService } from './customer-selector.service';

describe('CustomerSelectorService', () => {
  let service: CustomerSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
