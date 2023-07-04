
import { TestBed } from '@angular/core/testing';

import { Tbl_RelfacturaclicreditoService } from './Tbl_Relfacturaclicredito.service';

describe('Tbl_RelfacturaclicreditoService', () => {
  let service: Tbl_RelfacturaclicreditoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_RelfacturaclicreditoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});