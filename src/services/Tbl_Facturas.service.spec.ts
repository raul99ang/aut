
import { TestBed } from '@angular/core/testing';

import { Tbl_FacturasService } from './Tbl_Facturas.service';

describe('Tbl_FacturasService', () => {
  let service: Tbl_FacturasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_FacturasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});