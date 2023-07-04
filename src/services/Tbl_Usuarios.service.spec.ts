
import { TestBed } from '@angular/core/testing';

import { Tbl_UsuariosService } from './Tbl_Usuarios.service';

describe('Tbl_UsuariosService', () => {
  let service: Tbl_UsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_UsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});