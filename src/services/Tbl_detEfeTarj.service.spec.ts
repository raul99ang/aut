
import { TestBed } from '@angular/core/testing';

import { Tbl_detEfeTarjService } from './Tbl_detEfeTarj.service';

describe('Tbl_detEfeTarjService', () => {
  let service: Tbl_detEfeTarjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_detEfeTarjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});