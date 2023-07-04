
import { TestBed } from '@angular/core/testing';

import { Tbl_TmpServCorteService } from './Tbl_TmpServCorte.service';

describe('Tbl_TmpServCorteService', () => {
  let service: Tbl_TmpServCorteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_TmpServCorteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});