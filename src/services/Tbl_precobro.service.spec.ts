
import { TestBed } from '@angular/core/testing';

import { Tbl_precobroService } from './Tbl_precobro.service';

describe('Tbl_precobroService', () => {
  let service: Tbl_precobroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_precobroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});