
import { TestBed } from '@angular/core/testing';

import { Tbl_FotoempleadoService } from './Tbl_Fotoempleado.service';

describe('Tbl_FotoempleadoService', () => {
  let service: Tbl_FotoempleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_FotoempleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});