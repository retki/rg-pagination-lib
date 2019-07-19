import { TestBed } from '@angular/core/testing';

import { RgPaginationLibService } from './rg-pagination-lib.service';

describe('RgPaginationLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RgPaginationLibService = TestBed.get(RgPaginationLibService);
    expect(service).toBeTruthy();
  });
});
