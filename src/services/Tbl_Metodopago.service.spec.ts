
import { TestBed } from '@angular/core/testing';

import { Tbl_MetodopagoService } from './Tbl_Metodopago.service';

describe('Tbl_MetodopagoService', () => {
  let service: Tbl_MetodopagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_MetodopagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});