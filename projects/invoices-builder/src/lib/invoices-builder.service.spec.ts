import { TestBed } from '@angular/core/testing';

import { InvoicesBuilderService } from './invoices-builder.service';

describe('InvoicesBuilderService', () => {
  let service: InvoicesBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoicesBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
