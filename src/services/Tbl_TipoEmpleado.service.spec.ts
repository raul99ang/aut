
import { TestBed } from '@angular/core/testing';

import { Tbl_TipoEmpleadoService } from './Tbl_TipoEmpleado.service';

describe('Tbl_TipoEmpleadoService', () => {
  let service: Tbl_TipoEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_TipoEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});