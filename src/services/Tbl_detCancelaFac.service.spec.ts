
import { TestBed } from '@angular/core/testing';

import { Tbl_detCancelaFacService } from './Tbl_detCancelaFac.service';

describe('Tbl_detCancelaFacService', () => {
  let service: Tbl_detCancelaFacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tbl_detCancelaFacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});