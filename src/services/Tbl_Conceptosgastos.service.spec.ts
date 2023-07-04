
import { TestBed } from '@angular/core/testing';

import { Tbl_ConceptosgastosService } from './Tbl_Conceptosgastos.service';

describe('Tbl_ConceptosgastosService', () => {
  let service: Tbl_ConceptosgastosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_ConceptosgastosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});