
import { TestBed } from '@angular/core/testing';

import { Tbl_SucursalService } from './Tbl_Sucursal.service';

describe('Tbl_SucursalService', () => {
  let service: Tbl_SucursalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_SucursalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});