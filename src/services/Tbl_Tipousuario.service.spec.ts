
import { TestBed } from '@angular/core/testing';

import { Tbl_TipousuarioService } from './Tbl_Tipousuario.service';

describe('Tbl_TipousuarioService', () => {
  let service: Tbl_TipousuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_TipousuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});