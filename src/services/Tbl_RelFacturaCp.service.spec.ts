
import { TestBed } from '@angular/core/testing';

import { Tbl_RelFacturaCpService } from './Tbl_RelFacturaCp.service';

describe('Tbl_RelFacturaCpService', () => {
  let service: Tbl_RelFacturaCpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_RelFacturaCpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});