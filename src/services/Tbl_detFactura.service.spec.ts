
import { TestBed } from '@angular/core/testing';

import { Tbl_detFacturaService } from './Tbl_detFactura.service';

describe('Tbl_detFacturaService', () => {
  let service: Tbl_detFacturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_detFacturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});