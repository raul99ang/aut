
import { TestBed } from '@angular/core/testing';

import { Tbl_FacturaspordiaService } from './Tbl_Facturaspordia.service';

describe('Tbl_FacturaspordiaService', () => {
  let service: Tbl_FacturaspordiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_FacturaspordiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});