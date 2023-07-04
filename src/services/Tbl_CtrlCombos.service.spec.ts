
import { TestBed } from '@angular/core/testing';

import { Tbl_CtrlCombosService } from './Tbl_CtrlCombos.service';

describe('Tbl_CtrlCombosService', () => {
  let service: Tbl_CtrlCombosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_CtrlCombosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});