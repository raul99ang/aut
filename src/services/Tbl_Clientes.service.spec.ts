
import { TestBed } from '@angular/core/testing';

import { Tbl_ClientesService } from './Tbl_Clientes.service';

describe('Tbl_ClientesService', () => {
  let service: Tbl_ClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_ClientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});