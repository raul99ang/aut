
import { TestBed } from '@angular/core/testing';

import { Tbl_SelSucursalService } from './Tbl_SelSucursal.service';

describe('Tbl_SelSucursalService', () => {
  let service: Tbl_SelSucursalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_SelSucursalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});