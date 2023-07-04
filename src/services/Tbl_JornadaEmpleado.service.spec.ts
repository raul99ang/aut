
import { TestBed } from '@angular/core/testing';

import { Tbl_JornadaEmpleadoService } from './Tbl_JornadaEmpleado.service';

describe('Tbl_JornadaEmpleadoService', () => {
  let service: Tbl_JornadaEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_JornadaEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});