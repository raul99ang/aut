
import { TestBed } from '@angular/core/testing';

import { Tbl_GastosService } from './Tbl_Gastos.service';

describe('Tbl_GastosService', () => {
  let service: Tbl_GastosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_GastosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});