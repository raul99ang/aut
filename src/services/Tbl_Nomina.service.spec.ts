
import { TestBed } from '@angular/core/testing';

import { Tbl_NominaService } from './Tbl_Nomina.service';

describe('Tbl_NominaService', () => {
  let service: Tbl_NominaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_NominaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});