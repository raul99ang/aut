
import { TestBed } from '@angular/core/testing';

import { Tbl_ServicioDescuentoService } from './Tbl_ServicioDescuento.service';

describe('Tbl_ServicioDescuentoService', () => {
  let service: Tbl_ServicioDescuentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_ServicioDescuentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});