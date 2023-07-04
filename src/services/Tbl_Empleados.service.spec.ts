
import { TestBed } from '@angular/core/testing';

import { Tbl_EmpleadosService } from './Tbl_Empleados.service';

describe('Tbl_EmpleadosService', () => {
  let service: Tbl_EmpleadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_EmpleadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});