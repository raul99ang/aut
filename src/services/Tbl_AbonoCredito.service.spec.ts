
import { TestBed } from '@angular/core/testing';

import { Tbl_AbonoCreditoService } from './Tbl_AbonoCredito.service';

describe('Tbl_AbonoCreditoService', () => {
  let service: Tbl_AbonoCreditoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_AbonoCreditoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});