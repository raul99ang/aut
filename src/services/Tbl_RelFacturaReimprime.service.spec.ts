
import { TestBed } from '@angular/core/testing';

import { Tbl_RelFacturaReimprimeService } from './Tbl_RelFacturaReimprime.service';

describe('Tbl_RelFacturaReimprimeService', () => {
  let service: Tbl_RelFacturaReimprimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_RelFacturaReimprimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});