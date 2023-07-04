
import { TestBed } from '@angular/core/testing';

import { Tbl_TelEmpleadoService } from './Tbl_TelEmpleado.service';

describe('Tbl_TelEmpleadoService', () => {
  let service: Tbl_TelEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_TelEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});